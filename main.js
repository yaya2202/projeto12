var coelho, coelho_img;
var obstaculos, obstaculos_img;
var chao, chao_img;
var ponto = 0;
var comidaBoa1, comidaBoa2, comidaBoa3;
var comidaRuim1, comidaRuim2, comidaRuim3;
var grupoComidaBoa, grupoComidaRuim;

function preload(){
    coelho_img = loadAnimation("rabbit.png");
    chao_img = loadImage("garden.png");
    comidaBoa1 = loadImage("maca.png");
    comidaBoa2 = loadImage("cenoura.webp");
    comidaBoa3 = loadImage("alface.png");
    comidaRuim1 = loadImage("grass.png");
    comidaRuim2 = loadImage("orangeLeaf.png");
    comidaRuim3 = loadImage("redImage.png");
}

function setup(){
    createCanvas(400,400);
    chao = createSprite(200,190);
    chao.addImage(chao_img);
    coelho = createSprite(200,300);
    coelho.addAnimation("andando", coelho_img);
    coelho.scale = 0.1;

    grupoComidaBoa = new Group();
    grupoComidaRuim = new Group();
}

function draw(){
    background("lightgray");
    ponto += Math.round(frameCount/60);
    if(grupoComidaBoa.isTouching(coelho)){
        ponto += 1;
    }
    if(grupoComidaRuim.isTouching(coelho)){
        coelho.destroy();
        coelho.velocityY = 0;
        coelho.velocityX = 0;
    }
    gerarComidaBoa();
    gerarComidaRuim();
    drawSprites();
    textSize(12);
    textFont("arial Black");
    fill("black");
    text("Pontuação: " + ponto, 100,30);
    coelho.x = mouseX;
}

function gerarComidaBoa(){
    if(frameCount%50 === 0){
        var comidaBoa = createSprite(200,30,random(20,50)); 
        comidaBoa.scale = 0.1;
        comidaBoa.velocityY = 4;
        var num = Math.round(random(1,3));

        switch(num){
            case 1: comidaBoa.addImage(comidaBoa1);
              break;
            case 2: comidaBoa.addImage(comidaBoa2);
              break;
            case 3: comidaBoa.addImage(comidaBoa3);
              break;
            default:break;    
        }
        //comidaBoa.lifetime = 150;
        grupoComidaBoa.add(comidaBoa);
    }
}

function gerarComidaRuim(){
    if(frameCount%150 === 0){
        var comidaRuim = createSprite(200,30,random(20,50)); 
        comidaRuim.scale = 0.1;
        comidaRuim.velocityY = 4;
        var num = Math.round(random(1,3));

        switch(num){
            case 1: comidaRuim.addImage(comidaRuim1);
              break;
            case 2: comidaRuim.addImage(comidaRuim2);
              break;
            case 3: comidaRuim.addImage(comidaRuim3);
              break;
            default:break;    
        }
        //comidaRuim.lifetime = 150;
        grupoComidaRuim.add(comidaRuim);
    }
}