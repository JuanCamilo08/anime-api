import errorMiddleware from '../../../src/middlewares/error';

describe('middleware -- error', () => {
  it('should populate res with status 500 if there is an error in the server', () => {
    const res = { statusCode: 0, message: '' };
    res.status = function (value) {
      this.statusCode = value;
      return res;
    };
    res.json = function (value) {
      this.message = value;
      return res;
    };

    const error = { error: 'PUMMMM!' };
    const req = {};

    errorMiddleware(error, req, res);

    expect(res.statusCode).toBe(500);
    expect(res.message).toBe('Internal server error');
  });
});
