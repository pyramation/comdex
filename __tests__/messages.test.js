import { comdex } from '../src/proto';

const MsgDepositRequest = comdex.vault.v1beta1.MsgDepositRequest;

it('messages.scoped', async () => {
  expect(
    MsgDepositRequest.fromPartial({
      amount: '23',
      from: 'from',
      id: 'id'
    })
  ).toMatchSnapshot();
});
