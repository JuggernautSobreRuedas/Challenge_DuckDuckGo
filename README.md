#  Challenge_DuckDuckGo

Challenge de automatización de pruebas de DuckDuckGo

**Precondiciones**
Tener instalado Node.js 18.12.1

**a. Para ver como se ejecutan las pruebas desde el ejecutor de Cypress:**

1. Descargar el repo
2. Abrir una consola de Windows y pararse sobre la carpeta **Challenge_DuckDuckGo**
3. Ejecutar el comando: **npm run cypress:open** (se debería abrir una ventana de cypress)
4. Seleccione la opción **E2E Testing** del ejecutor de cypress
5. Seleccione el navegador Chrome y luego **Start E2E Testing en Chrome**(se debería abrir un navegador Chrome)
6. Por ultimo haz click en el archivo **test_duckduckgo.cy.js**

**b. Para crear un reporte html de las pruebas:**

1. Abrir una consola de Windows y pararse sobre la carpeta **Challenge_DuckDuckGo**
2. Ejecutar el comando: **npm run cypress:run** (se iniciara a ejecutar las pruebas desde la consola)
3. Al finalizar la ejecución se creara el archivo html en la carpeta **Challenge_DuckDuckGo\cypress\reports\html**
4. Abrir el archivo **index.html**

**c. Para abrir la lista de urls de la búsqueda de "dogecoin":**

1. Ejecutar las pruebas ya sea desde el **ejecutor de cypress** o corriendo el comando **npm run cypress:run**
2. Al finalizar la ejecución se creara el archivo json en la carpeta **Challenge_DuckDuckGo\cypress\fixtures\read-write**
3. Abrir el archivo **url_list.json**

**c. Para abrir la lista de imágenes de la búsqueda de "dogs":**

1. Ejecutar las pruebas ya sea desde el **ejecutor de cypress** o corriendo el comando **npm run cypress:run**
2. Al finalizar la ejecución se creara el archivo json en la carpeta **Challenge_DuckDuckGo\cypress\fixtures\read-write**
3. Abrir el archivo **img_list.json**