wCREATE TABLE rol (
    rolid SERIAL PRIMARY KEY,
    modificar BOOLEAN,
    baja BOOLEAN,
    crear BOOLEAN,
    admin BOOLEAN
);

create table persona (
	personaid SERIAL primary key,
	nombre VARCHAR(50) NOT NULL,
    apellido_paterno VARCHAR(50) NOT NULL,
    apellido_materno VARCHAR(50),
    edad INT
);


CREATE TABLE usuarios (
    usuarioid SERIAL PRIMARY KEY,
    cargo VARCHAR(50),
    personaid INT references persona(personaid)
);

alter table usuarios
add column coordenadaid int

alter table usuarios 
add constraint fk_coordenadas
foreign key (coordenadaid)
references coordenadas(coordenadaid)

CREATE TABLE usuario_rol (
    usuarioid INT REFERENCES usuarios(usuarioid),
    rolid INT REFERENCES rol(rolid),
    PRIMARY KEY (usuarioid, rolid)
);
	

create table chofer (
	choferid SERIAL primary key, 
	codchofer int,
	usuarioid int references usuarios(usuarioid)

);

create table gps (
	gpsid SERIAL primary key,
	punto1 boolean,
	punto2 boolean,
	punto3 boolean
);

create table vehiculo (
	vehiculoid SERIAL primary key,
	cantidadpasajero int,
	numplaca VARCHAR(20),
	modelo int,
	color int,
	marca VARCHAR(50),
	gpsid int references gps(gpsid)
)

create table ruta (
	rutaid SERIAL primary key,
	nombre varchar(200),
	descripcion varchar(200),
	coord1 int,
	coord2 int,
	coord3 int,
	usuarios int references usuarios(usuarioid),
	coordenadaid int references coordenadas(coordenadaid)
);

create table coordenadas(
	coordenadaid SERIAL primary key,
	direccion varchar(150),
	latitud int,
	longitud int
);

CREATE TABLE rutas_vehiculo (
	rutaid int references ruta(rutaid),
	vehiculoid int references vehiculo(vehiculoid),
	primary key (rutaid, vehiculoid)
);


create table grupo (
	grupoid SERIAL primary key,
	grupo varchar(50),
	descripcion varchar(200),
	vehiculoid int references vehiculo(vehiculoid)
);

alter table ruta 
add column grupoid int

alter table ruta 
add constraint fk_grupo
foreign key (grupoid)
references grupo(grupoid)























{
  "usuario": "c3",
  "password": "c3"
  
}


{
  "usuarioid": "11",
  "codchofer": "cho01"
}



http:localhost:4000/api/register






{
  "usuario": "alondra",
  "password": "123123"
}










