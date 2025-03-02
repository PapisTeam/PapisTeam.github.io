// Tu token de acceso preobtenido de Dropbox (reemplázalo con tu propio token)
const ACCESS_TOKEN = "sl.u.AFng8NmPNhcPKbWuxXtwlOJjgVx2R7vfKqFFKIeGRtcRFNMP5wxI6YTqM5pmz7QZxxggPi9ckR7SAGlZ6nTlaagu5JBERe0LO2aO7CyZbru_Bby686-o8MTpHZTqcTY5WrO9GGMy21JTRNV4LiuLRliJaNy6hzu_xZooZl7njUw3Dwqv09iMl5XzGrgoh3G9e4W3lY2vRBDXffNVGCnXCllJTXElXZouAxqSNzowGxFSGD4tZUUO-PyjkVhcWK29IoFdluMzZdnVeNP3LucTw6bWq4Ez5BhrnZP5FUJej9hE7M-wlvxfBhyEg3G1x-CXtUWzhQrOwoc1Fyc_33PCcaFjyUeNmhJWQ0q9yNBwIKKdwnwWLcoMBy9hDs2ySgUQqRD51In5O6992ZxC8SZpGO6uBqzts_gLT7UcMUX0xa1ng-650pngGAXszeHcfelRGfa6DvVxAELTN2L-4ZGRStnSNHqIJImYCPOYx3pcMNzp17PhC9H1MJqBCyb9r5jSNbYTGbh3Ev7-PxzwyKJ6ZWpRhDh7tI10A1YsiSnA9m9pEAjuJpZY8NJOj31ucldC607qUgwFnK-beZkNk2Wil4Ig4rYyVSdDAA8O-8bev5A58qbH36dcXICCxvFdzhV33hD2sgf8a1MI9PHwS0AQQQvdp8La9IykJ38QT6mMtxHqAvU4WtWX9MyP2mkV5aQAEFDctWn3MmpzhmAbC_V6q0FqV6zQm1TMk1YognE2s7eUP_FzpittfiMn1OBMspPu-iLhTE4haDkU6D3YQzKLjmm9713bC1iLZiGB25lwiQKYTxrwtguLUsXmIs6m-Jt6pis_fKzNmG2B_oJ0FiFY1W0-VXOxYwYkWw52guVQyWxBzVuWIoGWiUnpeTxwznvu1DEgjGIYNglU-i_XprplacYBYlAoWiJzCgVr7IcRgPwzxDYX6FpVrgFvFq7pZ-XWF1heBpvBcd1Faz_m3CLdvEr1nuwViexhiafDfEvM6RkW9NrpMPOUheeoChz5RvIOs7dKa6hdueJEkclNaO-YO1kIAs_hzRJSAiVne6xOcVXSRuEEle5oBu376scBsLOKWpiy5VsYKpPFFnunjd_VDIli2xG4J7H8XaAMMW84awgihKRf-RPiUMys-omq2AaWWjRf5FaFQ3cZeK4d8AoKCmJSamnHRuWGPGj0fp_bWfhAU1MrZOP0TcGVR2su_kU3vMubj-PcAXXjXzgbX-E5vhLhPDS1ce1-2FXPixy4XRSwAzCC3R0vwwUeQAg255SAl9S3UKT9s_HrcNalTflK2JiO-yG-d3yZgU3VtLPFS1vClE7uziMdD4a_nSBzSasS5js";

// Crear una instancia de Dropbox
const dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });

// Contenedor para mostrar los archivos
const fileList = document.getElementById('fileList');

// Intentamos obtener y mostrar los archivos desde la cuenta de Dropbox
dbx.filesListFolder({ path: '' })
    .then(response => {
        const files = response.entries;

        if (files.length > 0) {
            files.forEach(file => {
                const fileElement = document.createElement('div');
                fileElement.textContent = file.name;
                fileList.appendChild(fileElement);
                
                // Aquí buscamos específicamente el archivo "Papi's Team.jpg"
                if (file.name === "Papi`s Team.jpg") {
                    const image = document.createElement('img');
                    image.src = file.path_display;
                    image.alt = "Logo de Papi's Team";
                    image.width = 200; // Ajusta el tamaño de la imagen
                    fileList.appendChild(image);
                }
            });
        } else {
            fileList.textContent = "No se encontraron archivos en tu Dropbox.";
        }
    })
    .catch(error => {
        console.error('Error al acceder a los archivos de Dropbox:', error);
        fileList.textContent = "Hubo un error al obtener los archivos desde Dropbox.";
    });
