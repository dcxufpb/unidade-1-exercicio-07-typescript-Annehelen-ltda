function isEmpty(str: string): boolean {
  let spaceCount = str.length - str.replace(" ", "").length;
  return str == null || spaceCount == str.length;
}
function dados_loja_param(nome_loja: string,
  logradouro: string,
  numero: number,
  complemento: string,
  bairro: string,
  municipio: string,
  estado: string,
  cep: string,
  telefone: string,
  observacao: string,
  cnpj: string,
  inscricao_estadual: string) {
  // Implemente aqui
  if (isEmpty(nome_loja)) {
    throw new Error(`O campo nome da loja é obrigatório`);
  }
  if(isEmpty(logradouro)){
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }
  let num = numero + ""
  if(numero == 0){
    num = "s/n";
  }
  if(isEmpty(municipio)){
    throw new Error(`O campo município do endereço é obrigatório`);
  }
  if(isEmpty(estado)){
    throw new Error(`O campo estado do endereço é obrigatório`);
  }
  if(isEmpty(cnpj)){
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }
  if(isEmpty(inscricao_estadual)){
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }

  var part2 = `${logradouro}, ${num}`;
  if (! isEmpty (complemento)){
      part2 += ` ${complemento}`;
    }
  var part3 = "";
  if (! isEmpty (bairro)){
      part3 += `${bairro} - `;
  }
  part3 += `${municipio} - ${estado}`;
  
  var part4 = "";
  if (! isEmpty (cep)){
      part4 = `CEP:${cep}`;
    }
  if (! isEmpty(telefone)){
      if (! isEmpty(part4)){
        part4 += ` `;
      }
      part4 += `Tel ${telefone}`;
    }
  if (! isEmpty(part4)){
      part4 += `\n`;
    }
  var part5 = "";
  if (! isEmpty(observacao)){
      part5 += `${observacao}`;
    }
  let output = `${nome_loja}\n`;
  output += `${part2}\n`;
  output += `${part3}\n`;
  output += `${part4}`;
  output += `${part5}\n`;
  output += `CNPJ: ${cnpj}\n`;
  output += `IE: ${inscricao_estadual}\n`;
  return output;
}

module.exports = dados_loja_param;
