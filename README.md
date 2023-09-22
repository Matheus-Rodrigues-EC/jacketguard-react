# JacketGuard ☂️

Este projeto é uma aplicação de previsão de clima/tempo para estados brasileiros.

Acesse [Este Link](https://jacketguard.vercel.app/) para conferir a aplicação.


![Alt text](/src/assets/image.png)
![Alt text](/src/assets/image-1.png)

### Usabilidade

- A aplicação irá solicitar acesso a sua localização 📌, caso negue 🚫, é possível redefinir essa configuração no seu navegador 🌐. 
- A aplicação busca qualquer cidade brasileira 🌎, seja por localização automática ou por pesquisa de texto.
- Quando se busca uma cidade 🏙️, as vezes a aplicação retornará um bairro 🏘️ daquela mesma cidade
- É possível escolher o tipo de previsão 🌦️, sendo entre 1 e 5 dias, inclusive ⌛.
- Quando é selecionado 1 dia para a previsão, o gráfico 📊 retornará a previsão em intervalos de 3 horas 🕒.
- Quando é selecionado de 1 a 3 dias, inclusive, será retornado data e hora 📅⌚.
- A partir de 4 dias, o grafico retornará apenas as datas 📅.
- Vale observar que cada ponto no gráfico 📊 corresponde uma previsão a cada 3 horas 🕒.
- A aplicação também mostrará velocidade em Km/h 🏍️💨 e direção do vento 🧭.


# Casos

Esta aplicação possui 7 tipos de previsões, cada uma terá um retorno visual diferente.


# ☀️ Céu limpo 
# ☁️ Nublado 
# 🌧️ Chovendo
# 🌨️ Nevando 
# ⛈️ Tempestade 
# 🌦️ Chuviscando 
# 🌫️ Neblina 

<br/>
<br/>
<br/>

# Utilizando o Docker 
A imagem dessa aplicação também está disponível no DockerHub. 

Para baixar o Docker acesse a [pagina oficial do docker](https://docs.docker.com/) e siga o passo a passo para instalar no seu sistema operacional

Instalado o docker, você pode testar sua instalação de duas formas

- execute o comando: **docker --version**, o resultado será **Docker version 24.0.6**, com o número de versão correspondente.

- execute o comando: **docker run hello-world**, o docker irá fazer um pull da imagem e irá executá-la

Agora que já está tudo pronto, você pode baixar a imagem dessa aplicação com o seguinte comando.


    docker pull mattrodriguesec/jacketguard:version1.0

Você pode verificar o download com um dos comandos:

    docker images 
    docker image ls

Após o download da imagem, execute o comando:
    
    docker run -d -p 0.0.0.0:5000:80 mattrodriguesec/jacketguard:version1.0

O docker irá rodar a aplicação e ela estaŕa disponível na ***porta 5000***

O parametro **-d**, é uma tag para **--detach**, que executa o container e o coloca em segundo plano. 

O parametro **-p**, é uma tag para **--publish**, que cria um mapeamento de porta entre o host e o container.

O parametro **0.0.0.0** é o *HOST* que permite acesso de qualquer lugar. Esse paramentro pode ser trocado para seu endereço IP, caso não queira que possa ser acessado de outro lugar.

O parametro **5000:80** é o mapeamento de portas. Esse parametro publica a porta 80 do do container para **localhost:5000** no host. Sem o mapeamento da porta você não poderá acessar o aplicativo do host.

Após isso, execute o comando **docker ps** para listar seus containeres ativos. A saída será semelhante à:

```bash 
    CONTAINER ID   IMAGE                                    COMMAND                  CREATED          STATUS          PORTS                            NAMES
886d950be6d8   mattrodriguesec/jacketguard:version1.0   "/docker-entrypoint.…"   23 minutes ago   Up 23 minutes   5000/tcp, 0.0.0.0:5000->80/tcp   gracious_lovelace
```

