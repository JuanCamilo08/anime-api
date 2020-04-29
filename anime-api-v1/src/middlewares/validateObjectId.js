import { Types } from 'mongoose';

export default (req, res, next) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).json('Invalid ID');

  next();
};
