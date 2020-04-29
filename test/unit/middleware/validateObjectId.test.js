import { Types } from 'mongoose';
import validateObjectId from '../../../src/middlewares/validateObjectId';

describe('middleware -- ValidateObjectId', () => {
  it('should call the next function if the ObjectId is valid', () => {
    const req = { params: {} };
    req.params.id = new Types.ObjectId().toHexString();
    const next = jest.fn();
    const res = { status: jest.fn(() => res), json: jest.fn(() => res) };

    validateObjectId(req, res, next);

    expect(next.mock.calls).toHaveLength(1);
  });
});
