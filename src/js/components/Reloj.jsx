import React from 'react';

export const Contador = ({ contadorDigital }) => {

	if (!contadorDigital) {
		return <div>Cargando...</div>;
	}

	return (
		<div className="text-center my-5 bg-dark container rounded p-3">
			<h1 className='text'>Contador simple formato hora</h1>
			<div className="d-flex justify-content-center display-1">
				{contadorDigital.map((caracter, index) => (
					<span
						key={index}
						className={caracter === ':' ? 'mx-1' : 'fondo p-2 mx-1 rounded'}
					>
						{caracter}
					</span>
				))}
			</div>
		</div>
	);
}