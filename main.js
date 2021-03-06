let app = new Vue({
  el: "#app",
  data: {
    dataAppliances: [
      {
        category: "Tv",
        id: "tv01",
        idModal: "#tv01",
        serial: 001,
        name: 'Televisor LG 50" 4K UHD Smart TV 50UP7500PSF',
        img: "assets/electrodomesticos/tv1.webp",
        description:
          "Pantalla LED diseño que aumenta experiencia visual * Active HDR para detalles realistas * Sonido Ultra Surround mejora la experiencia auditiva * Smart TV la manera fácil de disfrutar sin teclear al contenido favorito",
        price: 1999900,
        cant: 0,
        total: 0,
      },
      {
        category: "Tv",
        id: "tv02",
        idModal: "#tv02",
        serial: 002,
        name: 'Televisor smart tv Hyundai 40" LED HYLED4022AiM',
        img: "assets/electrodomesticos/tv2.webp",
        description:
          "Aprovecha tu TV HYUNDAI de 43' 109 cms. Smart FHD y su Sistema Operativo ANDROID TV con licencia oficial desarrollada por Google. Además disfruta de su hermoso marco sin borde, conexión Bluetooth, acceso directo a NETFLIX, YOUTUBE, PRIME VIDEO, BROWSER y Asistente de Voz desde el control remoto (Go Control).",
        price: 1299900,
        cant: 0,
        total: 0,
      },
      {
        category: "Air fryers",
        id: "af01",
        idModal: "#af01",
        serial: 001,
        name: "Freidora de aire digital Oster 4L 7 funciones 2129371 Negro",
        img: "assets/electrodomesticos/AF1.webp",
        description:
          "La nueva y versatil Freidora de aire digital ofrece una gran variedad de beneficios, empezando por su canasta amplia de 4L que te permite cocinar diversas recetas para la familia. Cuenta con 7 funciones digitales preestablecidas con la opción de cocinar carne, pollo, pescado, mariscos, papas, vegetales y postres.",
        price: 339900,
        cant: 0,
        total: 0,
      },
      {
        category: "Air fryers",
        id: "af02",
        idModal: "#af02",
        serial: 002,
        name: "Freidora de aire Oster 5,5L biocerámica",
        img: "assets/electrodomesticos/AF2.webp",
        description:
          "cocina tus alimentos de una forma mas rápida y saludable con esta freidora que Oster trae para ti.",
        price: 469900,
        cant: 0,
        total: 0,
      },
      {
        category: "Washing machine",
        id: "wm01",
        idModal: "#wm01",
        serial: 001,
        name: "Lavadora Whirlpool 24 kl 8MWTWLA31WJG Plateado",
        img: "assets/electrodomesticos/wm1.webp",
        description: "Lavadora whirlpool 24 kl 8mwtwla31wjg silver",
        price: 2089900,
        cant: 0,
        total: 0,
      },
      {
        category: "Washing machine",
        id: "wm02",
        idModal: "#wm02",
        serial: 001,
        name: "Lavadora Mabe 24KG/53LB LMC74201WDAB0 gris aquasav",
        img: "assets/electrodomesticos/wm2.webp",
        description: "Lavadora mabe 24kg/53lb lmc74201wdab0 aquasaver",
        price: 2249900,
        cant: 0,
        total: 0,
      },
      {
        category: "Fridge",
        id: "f01",
        idModal: "#f01",
        serial: 001,
        name: "Nevera Mabe RMP420FLCG1 No Frost 420lt Grafito",
        img: "assets/electrodomesticos/f1.webp",
        description:
          "Ahorro de energía, mejor conservación y mayor frescura de alimentos, gracias a su Tecnología Home Energy Saver.•Conserva tus alimentos frescos por más tiempo con Total FreshFlow.•Mayor capacidad interior para almacenar todos tus alimentos.",
        price: 1819900,
        cant: 0,
        total: 0,
      },
      {
        category: "Fridge",
        id: "f02",
        idModal: "#f02",
        serial: 002,
        name: "Nevera Haceb 448lt Himalaya 448 SE R2 Titanio",
        img: "assets/electrodomesticos/f2.webp",
        description:
          "Que en tu casa nunca falten los increíbles electrodomésticos que Haceb trae para ti.",
        price: 2441900,
        cant: 0,
        total: 0,
      },
    ],
    dataDate: [
      {
        category: "Tv",
        id: "tv01",
        idModal: "#tv01",
        serial: 001,
        name: 'Televisor LG 50" 4K UHD Smart TV 50UP7500PSF',
        img: "assets/electrodomesticos/tv1.webp",
        description:
          "Pantalla LED diseño que aumenta experiencia visual * Active HDR para detalles realistas * Sonido Ultra Surround mejora la experiencia auditiva * Smart TV la manera fácil de disfrutar sin teclear al contenido favorito",
        price: 1999900,
        cant: 0,
        total: 0,
      },
      {
        category: "Tv",
        id: "tv02",
        idModal: "#tv02",
        serial: 002,
        name: 'Televisor smart tv Hyundai 40" LED HYLED4022AiM',
        img: "assets/electrodomesticos/tv2.webp",
        description:
          "Aprovecha tu TV HYUNDAI de 43' 109 cms. Smart FHD y su Sistema Operativo ANDROID TV con licencia oficial desarrollada por Google. Además disfruta de su hermoso marco sin borde, conexión Bluetooth, acceso directo a NETFLIX, YOUTUBE, PRIME VIDEO, BROWSER y Asistente de Voz desde el control remoto (Go Control).",
        price: 1299900,
        cant: 0,
        total: 0,
      },
      {
        category: "Air fryers",
        id: "af01",
        idModal: "#af01",
        serial: 001,
        name: "Freidora de aire digital Oster 4L 7 funciones 2129371 Negro",
        img: "assets/electrodomesticos/AF1.webp",
        description:
          "La nueva y versatil Freidora de aire digital ofrece una gran variedad de beneficios, empezando por su canasta amplia de 4L que te permite cocinar diversas recetas para la familia. Cuenta con 7 funciones digitales preestablecidas con la opción de cocinar carne, pollo, pescado, mariscos, papas, vegetales y postres.",
        price: 339900,
        cant: 0,
        total: 0,
      },
      {
        category: "Air fryers",
        id: "af02",
        idModal: "#af02",
        serial: 002,
        name: "Freidora de aire Oster 5,5L biocerámica",
        img: "assets/electrodomesticos/AF2.webp",
        description:
          "cocina tus alimentos de una forma mas rápida y saludable con esta freidora que Oster trae para ti.",
        price: 469900,
        cant: 0,
        total: 0,
      },
      {
        category: "Washing machine",
        id: "wm01",
        idModal: "#wm01",
        serial: 001,
        name: "Lavadora Whirlpool 24 kl 8MWTWLA31WJG Plateado",
        img: "assets/electrodomesticos/wm1.webp",
        description: "Lavadora whirlpool 24 kl 8mwtwla31wjg silver",
        price: 2089900,
        cant: 0,
        total: 0,
      },
      {
        category: "Washing machine",
        id: "wm02",
        idModal: "#wm02",
        serial: 001,
        name: "Lavadora Mabe 24KG/53LB LMC74201WDAB0 gris aquasav",
        img: "assets/electrodomesticos/wm2.webp",
        description: "Lavadora mabe 24kg/53lb lmc74201wdab0 aquasaver",
        price: 2249900,
        cant: 0,
        total: 0,
      },
      {
        category: "Fridge",
        id: "f01",
        idModal: "#f01",
        serial: 001,
        name: "Nevera Mabe RMP420FLCG1 No Frost 420lt Grafito",
        img: "assets/electrodomesticos/f1.webp",
        description:
          "Ahorro de energía, mejor conservación y mayor frescura de alimentos, gracias a su Tecnología Home Energy Saver.•Conserva tus alimentos frescos por más tiempo con Total FreshFlow.•Mayor capacidad interior para almacenar todos tus alimentos.",
        price: 1819900,
        cant: 0,
        total: 0,
      },
      {
        category: "Fridge",
        id: "f02",
        idModal: "#f02",
        serial: 002,
        name: "Nevera Haceb 448lt Himalaya 448 SE R2 Titanio",
        img: "assets/electrodomesticos/f2.webp",
        description:
          "Que en tu casa nunca falten los increíbles electrodomésticos que Haceb trae para ti.",
        price: 2441900,
        cant: 0,
        total: 0,
      },
    ],
    dataTable: [],
    length: 0,
    values: "all",
    total: 0,
    pago:0,
  },
  computed: {
    totall() {
      let total = this.total;
      this.dataTable.forEach((element) => {
        return (total += element.total);
      });
      return total;
    },
  },
  methods: {
    filter() {
      if (this.values == "all") {
        this.dataAppliances = this.dataDate;
      } else {
        let filtros = this.dataDate.filter((element) => {
          if (element.category == this.values) {
            return element;
          }
        });
        this.dataAppliances = filtros;
      }
    },
    cant(item, value) {
      if (value == 0) {
        if (item.cant > 0) {
          item.cant--;
        } else {
          console.log("Seleccione uno ole");
          return (item.cant = 0);
        }
      } else {
        item.cant++;
      }
    },
    agg(item) {
      if (item.cant == 0) {
        return alert("Seleccioné la cantidad que desea comprar");
      } else if (this.dataTable.length === 0) {
        console.log("Entro en el else-if");
        this.dataTable.push(item);
      } else {
        let index = this.dataTable.indexOf(item);
        if (index === -1) {
          this.dataTable.push(item);
        } else {
          this.dataTable.forEach((element) => {
            if (element.id === item.id) {
              console.log("Entro en el if");
              let index = this.dataTable.indexOf(element);
              this.dataTable[index].element.cant = item.cant;
            }
          });
        }
      }
      this.length = this.dataTable.length;
    },
    deleteProduct(index) {
      this.dataTable.splice(index, 1);
      this.length = this.dataTable.length;
    },
    cancel() {
      if (this.dataTable > 0) {
        this.dataTable = [];
        alert("Se ha cancelado el pedido");
        this.length = this.dataTable.length;
      } else {
        console.log("Salir");
      }
    },
    buy() {
      alert('No tiene productos que comprar')
    },
    toBuy() {
      if (this.pago == 0) {
        alert('seleccione un metodo de pago')
      } else {
        alert("Tu compra a sido exitosa ");
        this.pago = 0;
        this.dataTable = [];
        this.length = this.dataTable.length;
      }
    },
  },
});
