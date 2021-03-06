const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.values(productDetails('Test1', 'Test2')[0]), Object.values(productDetails('Test1', 'Test2')[1]));
    // Teste que os dois productIds terminam com 123.
    // let x = productDetails('Test1', 'Test2')[0].details.productId;
    // let y = productDetails('Test1', 'Test2')[1].details.productId;
    // assert.strictEqual(parseInt(x.substring(x.length - 3)), 123);
    // assert.strictEqual(parseInt(y.substring(y.length - 3)), 123);
    const pD = productDetails('Test1', 'Test2');
    for (let i = 0; i < pD.length; i += 1) {
      assert.strictEqual(parseInt(pD[i].details.productId.substring(pD[i].details.productId.length - 3)), 123);
    }
  });
});
