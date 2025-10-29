 const tips = [
      "Separa los residuos orgánicos de los reciclables: ayuda a que los materiales puedan aprovecharse mejor.",
      "Lava los envases plásticos antes de reciclarlos para evitar contaminar otros materiales.",
      "Evita usar vasos y cubiertos desechables: opta por utensilios reutilizables.",
      "Usa bolsas de tela cuando vayas al supermercado en lugar de bolsas plásticas.",
      "Reutiliza frascos y botellas de vidrio como recipientes o decoración.",
      "Recicla el papel y cartón, pero asegúrate de que no estén mojados o sucios.",
      "Lleva tus pilas y aparatos electrónicos a puntos de recolección especializados.",
      "Compra productos hechos con materiales reciclados o reciclables.",
      "Repara o dona ropa en buen estado en lugar de desecharla.",
      "Haz compost con restos de frutas, verduras y cáscaras para crear abono natural."
    ];

    const btnTip = document.getElementById("btnTip");
    const tipTexto = document.getElementById("tipTexto");

    btnTip.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * tips.length);
      tipTexto.textContent = tips[randomIndex];
    });

  

