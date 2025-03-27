

<body>

    <div class="parent">
        <div class="div1">
            <h1>Este es el primer contenedor</h1>
        </div>
        <div class="div2">
            <!-- svelte-ignore a11y_missing_attribute -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.733977068832!2d-58.36729062358498!3d-34.661420660549005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33351c2ba471b%3A0xcaf8ac49b9820480!2sInmobiliaria%20CHV%20-%20Christian%20Villanueva!5e0!3m2!1ses!2sar!4v1743077906416!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="div3">
            <h1>Este es el tercer contenedor</h1>
        </div>
    </div>
        
</body>


<style>

.parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
    margin: 20px 20px;
}
    
.div1 {
    grid-row: span 5 / span 5;
    background-color: red;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    margin: auto;
    text-align: center;

}

.div2 {
    grid-row: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 2;
}

.div3 {
    grid-row: span 5 / span 5;
    grid-column-start: 3;
    grid-row-start: 1;
    background-color: red;
    border-radius: 15px;
    text-align: center;
}
        

</style>
