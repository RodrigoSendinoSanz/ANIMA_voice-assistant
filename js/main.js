function start() {
  if (annyang) {
    console.log(
      "%cHecho por: Rodrigo Sendino Sanz",
      "color: orange; font: 15px Arial, sans-serif;"
    );
    annyang.setLanguage("es-ES");
    annyang.start({ autoRestart: false, continuous: true });
    console.log("Listening...");
    annyang.addCommands(comandos);
    annyang.addCallback("result", function (phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log(
        "But then again, it could be any of the following: ",
        phrases
      );
    });
    annyang.debug();
    document.getElementById("btn").style.display = "none";
    document.getElementById("par1").style.display = "none";
    document.getElementById("par2").style.display = "none";
    document.getElementById("titulo").style.display = "none";

    /* PONER A PANTALLA COMPLETA */
    var el = document.body;

    var requestMethod =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullScreen;

    if (requestMethod) {
      // Native full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");

      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }
}

let bandera = false;
annyang.addCallback("soundstart", function () {
  if (!bandera) {
    document.getElementById("all2").style.display = "block";
    setTimeout(() => {
      voz("Bienvenido de nuevo");
      bandera = true;
    }, 100);
  }
  console.log("sound detected");
});

annyang.addCallback("result", function () {
  console.log("sound stopped");
});

    const comandos = {
      // SALUDO
      "okey anima": () => {
        voz("Bienvenido de nuevo");
      },

      "hey anima": () => {
        voz("Bienvenido de nuevo");
      },

      "Buenos días anima": () => {
        voz("Bienvenido de nuevo");
      },

      "Buenas tardes anima": () => {
        voz("Bienvenido de nuevo");
      },

      "Buenas noches anima": () => {
        voz("Bienvenido de nuevo");
      },
      "Esta es *nombre": (nombre) => {
        voz("Hola" + nombre + ", mi nombre es Ánima, es un placer conocerte");
      },
      "Este es *nombre": (nombre) => {
        voz("Hola" + nombre + ", mi nombre es Ánima, es un placer conocerte");
      },

      // DESPEDIDA

      "Hasta mañana anima": () => {
        voz("Hasta mañana");
        annyang.abort();
      },

      "Hasta luego anima": () => {
        voz("Hasta luego");
        location.reload();
        annyang.abort();
      },
      
      "adiós anima": () => {
        voz("Hasta luego");
        location.reload();
        annyang.abort();
      },

      "apágate": () => {
        voz("ok, hasta luego");
        annyang.abort();
        location.reload();
      },

      "apágate por *tiempo minutos": (tiempo) => {
        voz("ok, vuelvo en" + tiempo + "minutos");
        annyang.abort();
        setTimeout(() => {
          annyang.start();
          voz("Hola, he vuelto, ¿me extrañaste?");
        }, tiempo * 60000);
      },
      // PREGUNTAS

      "qué hora es": () => {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;

        voz(" , son las " + strTime);
      },

      "quién te creo": () => {
        voz(
          "El desarrollador Rodrigo Sendino Sanz, puedes encontrar su perfil de githab con el siguiente link que te muestro en pantalla:"
        );
        setTimeout(() => {
          document.getElementById("text").innerHTML =
            "https://github.com/RodrigoSendinoSanz";
        }, 6000);
        setTimeout(() => {
          document.getElementById("text").innerHTML = " ";
        }, 20000);
      },
      "quién es tu creador": () => {
        voz(
          "El desarrollador Rodrigo Sendino Sanz, puedes encontrar su perfil de githab con el siguiente link que te muestro en pantalla:"
        );
        setTimeout(() => {
          document.getElementById("text").innerHTML =
            "https://github.com/RodrigoSendinoSanz";
        }, 5000);
        setTimeout(() => {
          document.getElementById("text").innerHTML = " ";
        }, 20000);
      },
      "quién te ha creado": () => {
        voz(
          "El desarrollador Rodrigo Sendino Sanz, puedes encontrar su perfil de githab con el siguiente link que te muestro en pantalla:"
        );
        setTimeout(() => {
          document.getElementById("text").innerHTML =
            "https://github.com/RodrigoSendinoSanz";
        }, 5000);
        setTimeout(() => {
          document.getElementById("text").innerHTML = " ";
        }, 20000);
      },
      "cuál es tu nombre": () => {
        voz("mi nombre es Ánima");
      },
      "cómo te llamas": () => {
        voz("mi nombre es Ánima, ¿y tu?");
      },
      "me llamo *nombre": (nombre) => {
        voz("Hola" + nombre + ", un placer conocerte");
      },
      "qué puedes hacer": () => {
        voz(
          "pueees puedo hacer varias cosas: prueba a decirme a que dia estamos, o que te cuente un chiste o que te cuente algo interesante, pero te aconsejo echar un vistazo a los comandos que se encuentran en la parte superior izquierda"
        );
      },
      "para qué sirven los botones": () => {
        voz(
          "El icono de la flecha recarga la página, el del micrófono verde activa de nuevo mi reconocimiento de voz y el morado muestra todos mis comandos disponibles"
        );
      },
      "que son estos botones": () => {
        voz(
          "El icono de la flecha recarga la página, el del micrófono verde activa de nuevo mi reconocimiento de voz y el morado muestra todos mis comandos disponibles"
        );
      },
      "a qué día estamos": () => {
        var date = new Date();
        var mes = [
          "enero",
          "febrero",
          "marzo",
          "abril",
          "mayo",
          "junio",
          "julio",
          "agosto",
          "septiembre",
          "octubre",
          "noviembre",
          "diciembre",
        ];
        voz(
          "hoy es " +
            date.getDate() +
            " de " +
            mes[date.getMonth()] +
            "del" +
            date.getFullYear()
        );
      },
      "qué día es hoy": () => {
        var date = new Date();
        var dia = [
          "lunes",
          "martes",
          "miercoles",
          "jueves",
          "viernes",
          "sabado",
          "domingo",
        ];
        voz("hoy es " + dia[date.getDay() - 1]);
      },
      "qué tiempo va a hacer hoy": () => {
        fetch("https://www.el-tiempo.net/api/json/v2/home")
          .then((res) => res.json())
          .then((data) => {
            console.log(data.today.p["0"]);
            console.log("data");
            voz(data.today.p["0"]);
          });
      },
      "qué tiempo va a hacer mañana": () => {
        fetch("https://www.el-tiempo.net/api/json/v2/home")
          .then((res) => res.json())
          .then((data) => {
            console.log(data.tomorrow.p["0"]);
            console.log("data");
            voz(data.tomorrow.p["0"]);
          });
      },

      "ver tiempo": () => {
        fetch("https://www.el-tiempo.net/api/json/v2/home")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      },
      "dónde estoy": () => {
        $.getJSON(
          "https://ipgeolocation.abstractapi.com/v1/?api_key=b7dea825e66d4a04a01d8d2bbc3f94e8",
          function (data) {
            console.log(data.city);
            console.log(data.country);
            voz(
              "te encuentras en " +
                data.city +
                ", " +
                data.region +
                ", " +
                data.country +
                "yu tu codigo postal es" +
                data.postal_code
            );
            console.log(data.flag.png);
            var imagen = String(data.flag.png);

            $("#img1").attr("src", imagen);
            setTimeout(() => {
              $("#img1").attr("src", " ");
            }, 10000);
          }
        );
      },

      "cuál es mi proveedor de internet": () => {
        $.getJSON(
          "https://ipgeolocation.abstractapi.com/v1/?api_key=b7dea825e66d4a04a01d8d2bbc3f94e8",
          function (data) {
            console.log(data);
            console.log(data.connection.isp_name);
            voz("Tu compañia es" + data.connection.isp_name);
          }
        );
      },
      "cuál es mi ubicación exacta": () => {
        $.getJSON(
          "https://ipgeolocation.abstractapi.com/v1/?api_key=b7dea825e66d4a04a01d8d2bbc3f94e8",
          function (data) {
            console.log(data);
            console.log(data.connection.isp_name);
            voz(
              "Dado que tu ip es" +
                data.ip_address +
                ",tu ubicacion exacta es" +
                data.latitude +
                " latitud, y " +
                data.longitude +
                " longitud"
            );
            document.getElementById("text").innerHTML =
              "IP:" +
              data.ip_address +
              " LATITUD:" +
              data.latitude +
              " LONGITUD:" +
              data.longitude;
            setTimeout(() => {
              document.getElementById("text").innerHTML = "";
            }, 10000);
          }
        );
      },
      "qué me cuentas": () => {
        voz("naaaa pueees aquí de tranquiis");
      },

      // ORDENES

      "cuéntame un chiste": () => {
        var chistes = [
          "¿Por qué las focas del circo miran siempre hacia arriba?, Porque es donde están los focos",
          "¡Estás obsesionado con la comida!, No sé a que te refieres croquetamente",
          "¿Por qué estás hablando con esas zapatillas?, Porque pone converse",
          "¿Sabes cómo se queda un mago después de comer?, magordito",
          "Me da un café con leche corto, Se me ha roto la máquina, cambio",
          "¡Camarero! Este filete tiene muchos nervios, Normal, es la primera vez que se lo comen",
          "Hola, ¿está Agustín?, No, estoy incomodín",
          "¿Cuál es la fruta más divertida?, la naranja ja ja",
        ];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran]);
      },
      "cuéntame algo interesante": () => {
        var curiosidades = [
          "La botella de vino más antigua de la historia tiene más de 1600 años, fue desenterrada de una tumba romana",
          "la antártida no es gobernada por nadie, se rige según un tratado para fines de libertad científica con fines pacificos y la armonía internacional",
          "Sabías que los antiguos ninjas llevaban con ellos grillos y cigarras para disfrazar el sonido de sus pasos",
          "El hoyo más profundo hecho por los humanos en la tierra tiene poco más de 12 kilómetros de profundidad",
          "Los primeros dinosaurios veían la Luna llena de volcanes activos y se encontraba a 350000 kilómetros , hoy se encuentra a 384400 kilómetros",
          "El pez dorado más longevo de la historia llegó a los 45 años cuando la especie de media vive de 5 a 10 años",
          "Sin la Luna los días duraran 8 horas, 4 horas de luz y 4 horas de oscuridad",
          "El corazón podría mover un coche,la presión que genera al bombear sangre podría, si saliera del cuerpo, alcanzar los 10 metros de distancia,la potencia generada al día por un corazón bastaría para mover un coche durante 32 kilómetros.",
        ];

        var ran = Math.floor(Math.random() * curiosidades.length);
        voz(curiosidades[ran]);
      },
      "Cuéntame algo": () => {
        var sabias = [
          "¿Sabías que la letra E es la que más se repite en el idioma español?, Es la letra mas usada en el idioma español, por eso agregamos una estadistica de las letras mas usadas, sobresaliendo así la letra E.",
          "¿Sabías que una pelota de golf puede ser más letal que una bala?,  puede producir en una persona es más grave que el de un disparo de pistola, si la bola alcanza las velocidades cercanas a los 300 kilómetros por hora.",
          "¿Sabías que las tortugas se comunican antes de la eclosión?",
          "Los científicos creen que las crías se pueden comunicar entre sí antes de nacer y pueden hacer arreglos para salir de sus huevos al mismo tiempo.",
          "Cada año viajan en aviones más de dos millones de animales.",
          "La temperatura en la Tierra incrementa ligeramente durante la luna llena.",
          "Los astronautas que viajan hasta el espacio exterior llegan a crecer 3 centímetros.",
          "Cada año Hawái se acerca cinco centímetros más a Japón",
          "Los seres humanos compartimos más de la mitad de nuestros genes con las babosas.",
        ];

        var ran = Math.floor(Math.random() * sabias.length);
        voz(sabias[ran]);
      },

      "Me aburro": () => {
        var aburi = [
          "El Sol tiene suficiente energía para seguir ardiendo durante más de 100 mil millones de años",
          "Cada año, cientos de árboles nuevos crecen porque hay ardillas que olvidan dónde enterraron sus nueces.",
          "Las vacas tienen mejores amigas y éstas tienden a pasar la mayor parte de su tiempo juntas.",
          "Por un momento muy breve, tú fuiste la persona más joven del planeta.",
          "Una vez, Noruega nombró caballero a un pingüino.",
          "Se han hecho estudios que muestran que las cabras, como nosotros, tienen acentos.",
          "No hay dos perros con las mismas huellas en la nariz, al igual que no hay dos huellas dactilares humanas iguales.",
          "Puedes hacerle cosquillas a un pingüino.",
          "Si te pudieses comunicar como las ballenas, podrías hablar en Barcelona y te escucharían en Berlín.",
        ];

        var ran = Math.floor(Math.random() * aburi.length);
        voz(aburi[ran]);
      },

      "reiníciate": () => {
        voz("entendido");
        location.reload();
      },

      "limpia la consola": () => {
        voz("entendido");
        console.clear();
      },

      "busca *busqueda": (busqueda) => {
        voz("ok, buscando " + busqueda + " para ti");
        document.getElementById("player").style.display = "block";
        $("#player").attr("src", "https://www.google.com/search?q=" + busqueda);
      },
      "ocultar buscador": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr("src", " ");
      },
      "oculta el buscador": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr("src", " ");
      },
      "quita el buscador": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr("src", " ");
      },
      "cierra el buscador": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr("src", " ");
      },
      "cierra el navegador": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr("src", " ");
      },
      "oculta el navegador": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr("src", " ");
      },
      "quiero escuchar *busqueda": (busqueda) => {
        voz("ok, buscando " + busqueda + "para ti");
        document.getElementById("player").style.display = "block";
        $("#player").attr(
          "src",
          "https://www.youtube.com/results?search_query=" +
            busqueda +
            "&sp=EgIQAw%253D%253D"
        );
      },

      "quita el reproductor": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr(
          "src",
          "https://www.youtube.com/results?search_query=" +
            " " +
            "&sp=EgIQAw%253D%253D"
        );
      },
      "oculta el reproductor": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr(
          "src",
          "https://www.youtube.com/results?search_query=" +
            " " +
            "&sp=EgIQAw%253D%253D"
        );
      },
      "ocultar reproductor": () => {
        document.getElementById("player").style.display = "none";
        $("#player").attr(
          "src",
          "https://www.youtube.com/results?search_query=" +
            " " +
            "&sp=EgIQAw%253D%253D"
        );
      },

      "mostrar reproductor": () => {
        document.getElementById("player").style.display = "block";
      },

      "llama al *telefono": (telefono) => {
        voz("ok, llamando al" + telefono);
        window.open("tel:" + telefono);
      },

      "di *frase": (frase) => {
        voz(frase);
      },
      "escribe *dicto": (dicto) => {
        document.getElementById("text").innerHTML = dicto;
      },
      "borrar": () => {
        document.getElementById("text").innerHTML = " ";
      },
      "repite *dicto": (dicto) => {
        voz(dicto);
      },
      /* FORMULARIO  */
      "visualizar formulario": () => {
        document.getElementById("form").style.display = "block";
      },
      "mostrar formulario": () => {
        document.getElementById("form").style.display = "block";
      },
      "abrir formulario": () => {
        document.getElementById("form").style.display = "block";
      },
      /* CORREO */
      "rellena el email con *correo": function (varaible) {
        let email = document.getElementById("email");
        let emailcorregido = varaible
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(/\ /g, "")
          .replace(/arroba/g, "@")
          .replace(/[\u00C0-\u00FF]/g, "")
          .toLowerCase();
        console.log(emailcorregido);
        email.value = emailcorregido;
      },
      "rellenar email con *correo": function (varaible) {
        let email = document.getElementById("email");
        let emailcorregido = varaible
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(/\ /g, "")
          .replace(/arroba/g, "@")
          .replace(/[\u00C0-\u00FF]/g, "")
          .toLowerCase();
        console.log(emailcorregido);
        email.value = emailcorregido;
      },
      "rellenar el email con *correo": function (varaible) {
        let email = document.getElementById("email");
        let emailcorregido = varaible
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(/\ /g, "")
          .replace(/arroba/g, "@")
          .replace(/[\u00C0-\u00FF]/g, "")
          .toLowerCase();
        console.log(emailcorregido);
        email.value = emailcorregido;
      },
      "rellenar en email *correo": function (varaible) {
        let email = document.getElementById("email");
        let emailcorregido = varaible
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(/\ /g, "")
          .replace(/arroba/g, "@")
          .replace(/[\u00C0-\u00FF]/g, "")
          .toLowerCase();
        console.log(emailcorregido);
        email.value = emailcorregido;
      },
      /* ASUNTO */
      "rellena el asunto con *asunto": function (variable) {
        let asunto = document.getElementById("asunto");
        asunto.value = variable;
      },
      "rellenar el asunto con *asunto": function (variable) {
        let asunto = document.getElementById("asunto");
        asunto.value = variable;
      },
      "rellenar asunto con *asunto": function (variable) {
        let asunto = document.getElementById("asunto");
        asunto.value = variable;
      },
      "rellenar en asunto *asunto": function (variable) {
        let asunto = document.getElementById("asunto");
        asunto.value = variable;
      },
      /* MENSAJE */
      "rellena el mensaje con *mensaje": function (variable) {
        let mensaje = document.getElementById("mensaje");
        mensaje.value = variable;
      },
      "rellenar mensaje con *mensaje": function (variable) {
        let mensaje = document.getElementById("mensaje");
        mensaje.value = variable;
      },
      "rellenar el mensaje con *mensaje": function (variable) {
        let mensaje = document.getElementById("mensaje");
        mensaje.value = variable;
      },
      "rellenar en mensaje *mensaje": function (variable) {
        let mensaje = document.getElementById("mensaje");
        mensaje.value = variable;
      },
      "edad menor": () => {
        document.getElementById("menor").click();
      },
      "edad adulto": () => {
        document.getElementById("adulto").click();
      },
      "soy menor": () => {
        document.getElementById("menor").click();
      },
      "soy adulto": () => {
        document.getElementById("adulto").click();
      },
      "enviar formulario": () => {
        document.getElementById("enviar").click();
        document.getElementById("borrarformulario").click();
      },

      /* BORRAR */
      "borra el email": () => {
        let borrar = "";
        let email = document.getElementById("email");
        email.value = borrar;
      },
      "borrar email": () => {
        let borrar = "";
        let email = document.getElementById("email");
        email.value = borrar;
      },
      "borra el asunto": () => {
        let borrar = "";
        let asunto = document.getElementById("asunto");
        asunto.value = borrar;
      },
      "borrar asunto": () => {
        let borrar = "";
        let asunto = document.getElementById("asunto");
        asunto.value = borrar;
      },
      "borra el mensaje": () => {
        let borrar = "";
        let mensaje = document.getElementById("mensaje");
        mensaje.value = borrar;
      },
      "borrar mensaje": () => {
        let borrar = "";
        let mensaje = document.getElementById("mensaje");
        mensaje.value = borrar;
      },
      "borrar formulario": () => {
        document.getElementById("borrarformulario").click();
      },

      /* OCULTAR FORMULARIO */
      "ocultar formulario": () => {
        document.getElementById("form").style.display = "none";
      },
      "quitar formulario": () => {
        document.getElementById("form").style.display = "none";
      },
      "cerrar formulario": () => {
        document.getElementById("form").style.display = "none";
      },

      /* ENVIAR EMAIL */
      "envía un email al correo *correo": function (variable) {
        let email = document.getElementById("email");
        let emailcorregido = variable
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(/\ /g, "")
          .replace(/arroba/g, "@")
          .replace(/[\u00C0-\u00FF]/g, "")
          .toLowerCase();
        console.log(emailcorregido);
        email.value = emailcorregido;
        $("#enviarcorreo").attr("href", "mailto:" + emailcorregido);
        console.log(emailcorregido);
        document.getElementById("enviarcorreo").click();
      },

      /* OPERACIONES */
      "haz el sumatorio de *sum1 + *sum2 + *sum3": (sum1, sum2, sum3) => {
        if (sum1 != "") {
          var suma = parseInt(sum1) + parseInt(sum2) + parseInt(sum3);
          voz(
            "ok, " +
              parseInt(sum1) +
              " mas " +
              parseInt(sum2) +
              " mas " +
              parseInt(sum3) +
              "=" +
              parseInt(suma)
          );
          console.log(parseInt(suma));
        }
      },
      "suma *sum1 más *sum2": (sum1, sum2) => {
        if (sum1 != "") {
          var suma = parseInt(sum1) + parseInt(sum2);
          voz(
            "ok, " +
              parseInt(sum1) +
              " mas " +
              parseInt(sum2) +
              "=" +
              parseInt(suma)
          );
          console.log(parseInt(suma));
        }
      },
      "suma *sum1 y *sum2": (sum1, sum2) => {
        if (sum1 != "") {
          var suma = parseInt(sum1) + parseInt(sum2);
          voz(
            "ok, " +
              parseInt(sum1) +
              " mas " +
              parseInt(sum2) +
              "=" +
              parseInt(suma)
          );
          console.log(parseInt(suma));
        }
      },
      "calcula la suma de *sum1 más *sum2": (sum1, sum2) => {
        if (sum1 != "") {
          var suma = parseInt(sum1) + parseInt(sum2);
          voz(
            "ok, " +
              parseInt(sum1) +
              " mas " +
              parseInt(sum2) +
              "=" +
              parseInt(suma)
          );
          console.log(parseInt(suma));
        }
      },
      "calcula la resta de*res1 menos *res2": (res1, res2) => {
        if (res1 != "") {
          var resta = parseInt(res1) - parseInt(res2);
          voz(
            "ok, " +
              parseInt(res1) +
              " menos " +
              parseInt(res2) +
              "=" +
              parseInt(resta)
          );
          console.log(parseInt(resta));
        }
      },
      "resta *res1 menos *res2": (res1, res2) => {
        if (res1 != "") {
          var resta = parseInt(res1) - parseInt(res2);
          voz(
            "ok, " +
              parseInt(res1) +
              " menos " +
              parseInt(res2) +
              "=" +
              parseInt(resta)
          );
          console.log(parseInt(resta));
        }
      },
      "calcula la división de *div1 entre *div2": (div1, div2) => {
        if (div1 != "") {
          var divide = parseInt(div1) / parseInt(div2);
          voz(
            "ok, " +
              parseInt(div1) +
              " entre " +
              parseInt(div2) +
              "=" +
              parseInt(divide)
          );
          console.log(parseInt(divide));
        }
      },
      "divide *div1 entre *div2": (div1, div2) => {
        if (div1 != "") {
          var divide = parseInt(div1) / parseInt(div2);
          voz(
            "ok, " +
              parseInt(div1) +
              " entre " +
              parseInt(div2) +
              "=" +
              parseInt(divide)
          );
          console.log(parseInt(divide));
        }
      },
      "calcula la multiplicación de *mul1 por *mul2": (mul1, mul2) => {
        if (mul1 != "") {
          var multiplica = parseInt(mul1) * parseInt(mul2);
          voz(
            "ok, " +
              parseInt(mul1) +
              " por " +
              parseInt(mul2) +
              "=" +
              parseInt(multiplica)
          );
          console.log(parseInt(multiplica));
        }
      },
      "multiplica *mul1 por *mul2": (mul1, mul2) => {
        if (mul1 != "") {
          var multiplica = parseInt(mul1) * parseInt(mul2);
          voz(
            "ok, " +
              parseInt(mul1) +
              " por " +
              parseInt(mul2) +
              "=" +
              parseInt(multiplica)
          );
          console.log(parseInt(multiplica));
        }
      },
      "haz la potencia de *elv1 elevado a *elv2": (elv1, elv2) => {
        if (elv1 != "") {
          var eleva = Math.pow(parseInt(elv1), parseInt(elv2));
          voz(
            "ok, " +
              parseInt(elv1) +
              " elevado a " +
              parseInt(elv2) +
              "=" +
              parseInt(eleva)
          );
          console.log(parseInt(eleva));
        }
      },
      "haz la raiz cuadrada de *raiz": (raiz) => {
        if (raiz != "") {
          var raizcuadra = Math.sqrt(parseInt(raiz));
          voz(
            "ok, la raíz cuadrada de " +
              parseInt(raiz) +
              " es" +
              "=" +
              parseInt(raizcuadra)
          );
          console.log(parseInt(raizcuadra));
        }
      },
      "calcula la raíz cuadrada de *raiz": (raiz) => {
        if (raiz != "") {
          var raizcuadra = Math.sqrt(parseInt(raiz));
          voz(
            "ok, la raíz cuadrada de " +
              parseInt(raiz) +
              " es" +
              "=" +
              parseInt(raizcuadra)
          );
          console.log(parseInt(raizcuadra));
        }
      },
      "tira un dado": () => {
        var dado = parseInt(6 * Math.random() + 1);
        voz("el resultado de la tirada es" + parseInt(dado));
      },
      "tira otra vez": () => {
        var dado = parseInt(6 * Math.random() + 1);
        voz("el resultado de la tirada es" + parseInt(dado));
      },
      "tira un dado de *ndado caras": (ndado) => {
        parseInt(ndado);
        var dado = parseInt(parseInt(ndado) * Math.random() + 1);
        voz("el resultado de la tirada es" + parseInt(dado));
      },

      // AMABILIDAD

      "qué tal": () => {
        voz("Bien y tu?");
      },
      "bien": () => {
        voz("Me alegro");
      },

      "gracias": () => {
        voz("Para servirte");
      },

      "Cómo estás": () => {
        voz("mejor que ayer, espero que usted también lo esté");
      },

      "Te presento a *nombre": (nombre) => {
        voz("Hola" + nombre + ", mi nombre es Ánima, es un placer conocerte");
      },

      "qué maja": () => {
        voz("gracias");
      },

      "qué maja eres": () => {
        voz("muchas gracias tu también");
      },


      // LLAMADA A LA ACCIÓN

      "Ánima": () => {
        voz("aquí estoy");
      },
      "Hey": () => {
        voz("aquí estoy");
      },
      "Hola": () => {
        voz("aquí estoy");
      },
      "hola anima": () => {
        voz("Hola, que tal?");
      },
      "hola buenos días": () => {
        voz("Buenos días, que tal?");
      },
      "buenos días": () => {
        voz("Buenos días");
      },
      "hola buenas tardes": () => {
        voz("Buenas tardes, que tal?");
      },
      "buenas tardes": () => {
        voz("Buenas tardes");
      },
      "buenas noches": () => {
        voz("Buenas noches");
      },
      "Me puedes ayudar": () => {
        voz("claro que sí, dime que necesitas");
      },
      "Oye": () => {
        voz("dime");
      },

      "Estás ahí": () => {
        voz("aquí estoy");
      },
    };


function voz(texto) {
  document.getElementById("all2").style.visibility = "hidden";
  var textoAEscuchar = texto;
  var mensaje = new SpeechSynthesisUtterance();
  mensaje.text = textoAEscuchar;
  mensaje.volume = 1;
  mensaje.rate = 0.9;
  mensaje.pitch = 1;
  document.getElementById("all").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("all").style.visibility = "hidden";
    document.getElementById("all2").style.visibility = "visible";
  }, 4000);
  speechSynthesis.speak(mensaje);
}
