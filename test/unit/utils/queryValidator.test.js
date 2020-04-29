import queryValidator from '../../../src/utils/queryValidator';

describe('utils -- queryValidator', () => {
  it('should throw an error if it recieve a property not allowed', () => {
    const payload = jest.fn({ newProperty: 'hi' });

    const { error } = queryValidator(payload);
    expect(error).not.toBeNull();
  });
});
