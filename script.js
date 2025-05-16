document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    const messageDisplay = document.getElementById('messageDisplay');
    const textToCopy = "00020101021226830014br.gov.bcb.pix2561pix.bancobv.com.br/qr/v2/458316e6-3265-11f0-9515-a6b7444628c95204000053039865802BR5925WISE BRASIL CORRETORA DE 6009SAO PAULO62410503***50300017BR.GOV.BCB.BRCODE01051.0.0630446B6";

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(textToCopy).then(function() {
            messageDisplay.textContent = 'Código PIX copiado! Cole no app do Inter.';
            messageDisplay.style.display = 'block';
            messageDisplay.style.backgroundColor = '#e6f7ff';
            messageDisplay.style.color = '#2980b9';
        }).catch(function(err) {
            console.error('Não foi possível copiar o código PIX: ', err);
            messageDisplay.textContent = 'Falha ao copiar. Tente novamente.';
            messageDisplay.style.display = 'block';
            messageDisplay.style.backgroundColor = '#ffe6e6';
            messageDisplay.style.color = '#d32f2f';
        });
    });
});
