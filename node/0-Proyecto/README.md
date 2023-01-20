# Proyect of First Bimester
## General Info
Some items to consider into proyect:

## Table of Contents
1. [DataBase Diagram (DB)](#dataBase) => MySql Workbench
2. [MockUps](#mockUps)=> Figma
3. [User Stories](#userStories)




<a name="database"></a>
### 1. Database Diagram
<img src="Model%20DB/db.png">

<a name="mockUps"></a>
### 2. MockUps


<a name="userStories"></a>
### 3. User Stories
>1 (Small), 2 (Medium), 3 (Large), 5 (Extra), 7 (Extra Large)

### Client
- [x] Como **cliente**, quiero visualizar el portafolio del fotógrafo para decidir si agendo una sesión.\
  **Esfuerzo:** 3\
  **Criterios de Aceptación:**
  - ***Dado*** que el cliente se encuentra en la página principal \
    ***Cuando*** selecciona en el menú la opción 'Portfolio'\
    ***Entonces*** se le desplegará la pestaña con los distintos Portafolios que tenga el Photógrafo.
  - ***Dado*** que el cliente se encuentra en la pestaña de 'Portfolio'\
    ***Cuando*** seleciona un fotógrafo en pàrticular \
    ***Entonces*** se le recargará la pestaña con los distintos Portafolios que tenga el Photógrafo.


- [ ] Como **cliente**, quiero elegir un paquete para agendar una sesión destinada a mi boda.\
  **Esfuerzo:** 3 \
  **Criterios de Aceptación:**
  - ***Dado*** que el cliente se encuentra en la pestaña de 'Sessions'\
    ***Cuando*** selecciona un paquete de boda \
    ***Entonces*** se le despliega un formulario para confirmar el agendamiento de la sesión.


### Photographer
- [ ] Como **fotógrafo**, quiero mostrar mis portafolios por categoría, para obtener sesiones.\
  **Esfuerzo:** 5 \
  **Criterios de Aceptación:**
  - ***Dado*** que el fotógrafo inicio sesión con su id y constraseña\
    ***Cuando*** selecciona la sección de 'Portfolios'\
    ***Entonces*** se le desplegará un formulario con el nombre de la categoría y el apartado para cargar las fotos correspondientes a dicho 'Portfolio'.
  - ***Dado*** que el fotógrafo se encuentra en la página principal\
    ***Cuando*** selecciona 'portfolio' eligiendo su nombre\
    ***Entonces*** la página debe presentar los 'Porfolios' segmentados por categoría asociados a su nombre.
  

- [ ] Como **fotógrafo**, quiero visualizar las sesiones programadas para mi, para aceptarlas, rechazarlas o aplazarlas.\
  **Esfuerzo:** 5 \
  **Criterios de Aceptación:**
  - ***Dado*** que el fotógrafo inicio sesión con su id y constraseña\
    ***Cuando*** seleccione la sección de 'Sessions'\
    ***Entonces*** se debe desplegar la lista de sesiones porgramadas a ser abordadas.
  - ***Dado*** que el fotógrafo inicio sesión con su id y constraseña\
    ***Cuando*** seleccione la sección de 'Sessions'\
    ***Entonces*** se le debe indicar que no existen sesiones ya que no se ha reservado ninguna.