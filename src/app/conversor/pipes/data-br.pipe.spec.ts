import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2021-08-26 para 26/08/2021', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2021-08-26')).toEqual('26/08/2021');
  });
});
