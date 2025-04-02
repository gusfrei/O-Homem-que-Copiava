document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    const messageDisplay = document.getElementById('messageDisplay');
    const textToCopy = "00020101021226830014br.gov.bcb.pix2561pix.bancobv.com.br/qr/v2/3dcbf485-0f48-11f0-9b4f-a6c3285647dc5204000053039865802BR5925WISE BRASIL CORRETORA DE 6009SAO PAULO62410503***50300017BR.GOV.BCB.BRCODE01051.0.06304A961"; // Replace with the actual message

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(textToCopy).then(function() {
            messageDisplay.textContent = 'Mensagem copiada! Cole no WhatsApp.';
            messageDisplay.style.display = 'block';
        }).catch(function(err) {
            console.error('Não foi possível copiar o texto: ', err);
            messageDisplay.textContent = 'Falha ao copiar. Tente novamente.';
            messageDisplay.style.display = 'block';
        });
    });
});
