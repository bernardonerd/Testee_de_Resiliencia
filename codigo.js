
function pontuacao(event){
    event.preventDefault();
    let p1 = parseInt(document.getElementById("1").value);
    let p2 = parseInt(document.getElementById("2").value);
    let p3 = parseInt(document.getElementById("3").value);
    let p4 = parseInt(document.getElementById("4").value);
    let p5 = parseInt(document.getElementById("5").value);
    let p6 = parseInt(document.getElementById("6").value);
    let p7 = parseInt(document.getElementById("7").value);
    let p8 = parseInt(document.getElementById("8").value);
    let p9 = parseInt(document.getElementById("9").value);
    let p10 = parseInt(document.getElementById("10").value);
    let p11 = parseInt(document.getElementById("11").value);
    let p12 = parseInt(document.getElementById("12").value);
    let p13 = parseInt(document.getElementById("13").value);
    let p14 = parseInt(document.getElementById("14").value);
    let p15 = parseInt(document.getElementById("15").value);
    let p16 = parseInt(document.getElementById("16").value);
    let p17 = parseInt(document.getElementById("17").value);
    let p18 = parseInt(document.getElementById("18").value);
    let p19 = parseInt(document.getElementById("19").value);
    let p20 = parseInt(document.getElementById("20").value);
    let pontos=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18+p19+p20;
    if (pontos==100 && pontos>=80){
        window.alert(`Sua pontuação foi: ${pontos}. Seu nível de resiliência é ótimo. Você tem adaptabilidade e flexibilidade, sabe como lidadr com situações antagônicas e se recuperar de crises e ocasiões adversas.`);
        res.innerHTML += `${pontos} pontos`;
    }else if (pontos>=65 && pontos<=79){
        window.alert(`Sua pontuação foi: ${pontos}. Você tem boa capacidade de enfrentar crises, mas às vezes, tem dificuldade de confortar determinadas situações antagônicas ou que sejam novas.`);
        res.innerHTML += `${pontos} pontos`;
    }else if(pontos>=50 && pontos<=64){
        window.alert(`Sua pontuação foi: ${pontos}. Você consegue administrar parcialmente algumas circunstâncias adversas, mas em outros momentos, falta-lhe a habilidade de adaptação e flexibilidade perante situações inesperadas.`);
        res.innerHTML += `${pontos} pontos`;
    }else if(pontos>=40 && pontos<=49){
        window.alert(`Sua pontuação foi: ${pontos}. Você tem muita dificuldade de enfrentar conjunturas anormais ou de crises emergentes. Acrescente mais flexibilidade à sua vida e esteja mais aberto a lidar com os problemas de maneira diferente e mais salutar no futuro.`)
        res.innerHTML += `${pontos} pontos`;
    }else{
        window.alert(`Sua pontuação foi: ${pontos}. Seu nível de resiliência é baixo, o que pode fazer você sentir-se vítma das circunstâncias. Você realmente precisa trabalhar sua maneira de enfrentar e lidar com crises e adversidades.`)
        res.innerHTML += `${pontos} pontos`;
    }
}
