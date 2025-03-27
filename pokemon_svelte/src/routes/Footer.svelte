<footer class="footer">
    <div class="footer-container">
        <div class="footer-logo">
            <img src="https://static.tokkobroker.com/tfw_images/903_Inmobiliaria%20CHV/CHV%20marca%20apaisada%20Transparente.png" 
                 alt="CHVS" width="300">
        </div>
        <div class="footer-info">
            <p>📞 Teléfono: 4201-1000</p>
            <p>📍 Dirección: 25 de Mayo 78, Avellaneda</p>
        </div>
    </div>
    <div class="footer-copy">
        <p>© 2021 Inmobiliaria CHV. Todos los derechos reservados.</p>
    </div>
</footer>

<style>
    .footer {
        background-color: #004466; 
        color: white;
        padding: 20px 10px;
        text-align: center;
    }

    .footer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .footer-logo img {
        max-width: 100%;
        height: auto;
    }

    .footer-info p {
        margin: 5px 0;
        font-size: 16px;
        text-align: left;
    }

    .footer-copy {
        margin-top: 10px;
        font-size: 14px;
        opacity: 0.8;
    }

    @media (min-width: 768px) {
        .footer-container {
            flex-direction: row;
            justify-content: space-between;
            max-width: 900px;
            margin: 0 auto;
        }
        .footer-info {
            text-align: right;
        }
    }
</style>
