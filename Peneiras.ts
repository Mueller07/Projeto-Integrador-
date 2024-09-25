var rl = require('readline-sync')

class exPeneira{
    ID_Peneira : 123456
    ID_Clube : 2233
    Data_Comeco : {10,11,12,13,14,15,16,17,18,19,20,21,22}
    Data_Fim : 22
    Localizacao : "Sapucaia"
    Modalidade : {"Vôlei","Futebol","Handebol","Basquete","futsal"}
   //esse código acima é um exemplo de uma peneira com as caracteristicas prontas já.
    
    getCadastroVolei():void{
     let seuNome = rl.question("Digite seu nome :")
     let suaIdade = rl.questionInt("Digite sua idade :")
     let seuEndereco = rl.question("Digite seu endereço :")
     let suaData_Nasci = rl.question("Digite sua data de nascimento.Ex: 11/09/2024 :")
     let seuTelefone = rl.questionInt("Digite seu número :")

        console.log(`\nSeu nome : ${seuNome} \nSua idade : ${suaIdade} \nSeu endereço : ${seuEndereco} \nSua Data de Aniversario : ${suaData_Nasci} \nSeu telefone : ${seuTelefone}`)
    }

    getCadastroFutebol():void{
        let seuNome = rl.question("Digite seu nome :")
        let suaIdade = rl.questionInt("Digite sua idade :")
        let seuEndereco = rl.question("Digite seu endereço :")
        let suaData_Nasci = rl.question("Digite sua data de nascimento.Ex: 11/09/2024 :")
        let seuTelefone = rl.questionInt("Digite seu número :")
   
        console.log(`\nSeu nome : ${seuNome} \nSua idade : ${suaIdade} \nSeu endereço : ${seuEndereco} \nSua Data de Aniversario : ${suaData_Nasci} \nSeu telefone : ${seuTelefone}`)
       }

       getCadastroHandebol():void{
        let seuNome = rl.question("Digite seu nome :")
        let suaIdade = rl.questionInt("Digite sua idade :")
        let seuEndereco = rl.question("Digite seu endereço :")
        let suaData_Nasci = rl.question("Digite sua data de nascimento.Ex: 11/09/2024 :")
        let seuTelefone = rl.questionInt("Digite seu número :")
   
        console.log(`\nSeu nome : ${seuNome} \nSua idade : ${suaIdade} \nSeu endereço : ${seuEndereco} \nSua Data de Aniversario : ${suaData_Nasci} \nSeu telefone : ${seuTelefone}`)
       }

       getCadastroBasquete():void{
        let seuNome = rl.question("Digite seu nome :")
        let suaIdade = rl.questionInt("Digite sua idade :")
        let seuEndereco = rl.question("Digite seu endereço :")
        let suaData_Nasci = rl.question("Digite sua data de nascimento.Ex: 11/09/2024 :")
        let seuTelefone = rl.questionInt("Digite seu número :")
   
        console.log(`\nSeu nome : ${seuNome} \nSua idade : ${suaIdade} \nSeu endereço : ${seuEndereco} \nSua Data de Aniversario : ${suaData_Nasci} \nSeu telefone : ${seuTelefone}`)
       }

       getCadastroFutsal():void{
        let seuNome = rl.question("Digite seu nome :")
        let suaIdade = rl.questionInt("Digite sua idade :")
        let seuEndereco = rl.question("Digite seu endereço :")
        let suaData_Nasci = rl.question("Digite sua data de nascimento.Ex: 11/09/2024 :")
        let seuTelefone = rl.questionInt("Digite seu número :")
   
        console.log(`\nSeu nome : ${seuNome} \nSua idade : ${suaIdade} \nSeu endereço : ${seuEndereco} \nSua Data de Aniversario : ${suaData_Nasci} \nSeu telefone : ${seuTelefone}`)
       }
}

export  class Peneiras extends exPeneira {
 
    getEscolherModalidade():void{
      let escolhaModalidade = rl.question.ToLoweCase("Digite sua modalidade/esporte que você deseja :")
      if(escolhaModalidade === "vôlei"){
        this.getCadastroVolei()

      }else if(escolhaModalidade === "futebol"){
        this.getCadastroFutebol()

      }else if(escolhaModalidade === "handebol"){
        this.getCadastroHandebol()
        
      }else if(escolhaModalidade === "basquete"){
        this.getCadastroBasquete()

      }else if(escolhaModalidade === "futsal"){
        this.getCadastroFutsal()

      }


    }

     getAcharPeneira():void{
        let Data_ComecoUp = rl.questionInt("Diga a hora que você quer:")

        if(Data_ComecoUp === this.Data_Comeco){
            
            console.log("Ok, horario aberto.")
            
        }else(Data_ComecoUp > this.Data_Fim)
        console.log("Nenhuma peneira aberta.")
     }
    
}

/*class clube{
  ID_Clube : number
  Nome : string
  Endereco : string
  Numero : number
  email : string
  cidade : string
  estado : string
  modalidade :  {"Vôlei","Futebol","Handebol","Basquete","futsal"}

}*/