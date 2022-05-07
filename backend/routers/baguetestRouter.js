import express from 'express';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import Baguetest from '../models/baguetestModel.js';
import { isAdmin, isAuth } from '../util.js';

const baguetestRouter = express.Router();
//pour envoyer au frontend find(renvoi la liste des produts)
baguetestRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || '';
    const categorie = req.query.categorie || '';
    const order = req.query.order || '';
    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const categorieFilter = categorie ? { categorie } : {};
    const sortOrder =
    order === 'lowest'
    ? { price: 1 }
    : order === 'highest'
    ? { price: -1 }
    : { _id: -1 };
    const count =  await Baguetest.count({
       ...nameFilter,
       ...categorieFilter,
      }).sort(sortOrder);
      const baguestest = await Baguetest.find({
        ...nameFilter,
        ...categorieFilter,
      })
    
    res.send(baguestest);
  })
);
baguetestRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Baguetest.find().distinct('categorie');
    res.send(categories);
  })
);

//seed to data base 

baguetestRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await Baguetest.remove({});
    const createdBaguestest = await Baguetest.insertMany(data.baguestest);
    res.send({ createdBaguestest });
  })
);
//get by id details api
baguetestRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const baguetest = await Baguetest.findById(req.params.id);
    if (baguetest) {
      res.send(baguetest);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
baguetestRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const baguetest = new Baguetest({
      name: 'sample name ' + Date.now(),
      seller: req.user._id,
      image: '/images/bague1.jpg',
      price: 0,
      categorie: 'sample category',
      brand: 'sample brand',
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      description: 'sample description',
    });
    const createdBaguestest = await baguetest.save();
    res.send({ message: 'Product Created', baguetest: createdBaguestest });
  })
);
baguetestRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const baguetestId = req.params.id;
    const baguetest = await Baguetest.findById(baguetestId);
    if (baguetest) {
      baguetest.name = req.body.name;
      baguetest.price = req.body.price;
      baguetest.image = req.body.image;
      baguetest.categorie = req.body.categorie;
      baguetest.brand = req.body.brand;
      baguetest.countInStock = req.body.countInStock;
      baguetest.description = req.body.description;
      const updatedBaguetest = await baguetest.save();
      res.send({ message: 'Product Updated', baguetest: updatedBaguetest});
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
baguetestRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const baguetest = await Baguetest.findById(req.params.id);
    if (baguetest) {
      const deleteBaguetest = await baguetest.remove();
      res.send({ message: 'Product Deleted', baguetest: deleteBaguetest });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
export default baguetestRouter;