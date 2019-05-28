package ml.work.main.dtos;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import ml.work.main.entities.Domicilio;
import ml.work.main.entities.Factura;

public class ClienteDTO extends PersonaDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private int id_usuario;
	private List<Factura> facturas;
	
	private String nombre_usuario;

	public ClienteDTO() {
		super();
	}
	
	public ClienteDTO(String nombre_persona, int dni, String password, int telefono, String email,
			Domicilio direccion, String nombre_usuario, List<Factura> facturas, Date alta, Date baja) {
		super(nombre_persona, dni, password, telefono, email, direccion, alta, baja);
		this.nombre_usuario = nombre_usuario;
		this.facturas = facturas;
	}

	public String getNombre_usuario() {
		return nombre_usuario;
	}

	public void setNombre_usuario(String nombre_usuario) {
		this.nombre_usuario = nombre_usuario;
	}

	public int getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}

	public List<Factura> getFacturas() {
		return facturas;
	}

	public void setFacturas(List<Factura> facturas) {
		this.facturas = facturas;
	}

	@Override
	public String getNombre_persona() {
		// TODO Auto-generated method stub
		return super.getNombre_persona();
	}

	@Override
	public void setNombre_persona(String nombre_persona) {
		// TODO Auto-generated method stub
		super.setNombre_persona(nombre_persona);
	}

	@Override
	public int getDni() {
		// TODO Auto-generated method stub
		return super.getDni();
	}

	@Override
	public void setDni(int dni) {
		// TODO Auto-generated method stub
		super.setDni(dni);
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return super.getPassword();
	}

	@Override
	public void setPassword(String password) {
		// TODO Auto-generated method stub
		super.setPassword(password);
	}

	@Override
	public int getTelefono() {
		// TODO Auto-generated method stub
		return super.getTelefono();
	}

	@Override
	public void setTelefono(int telefono) {
		// TODO Auto-generated method stub
		super.setTelefono(telefono);
	}

	@Override
	public String getEmail() {
		// TODO Auto-generated method stub
		return super.getEmail();
	}

	@Override
	public void setEmail(String email) {
		// TODO Auto-generated method stub
		super.setEmail(email);
	}

	@Override
	public Domicilio getDireccion() {
		// TODO Auto-generated method stub
		return super.getDireccion();
	}

	@Override
	public void setDireccion(Domicilio direccion) {
		// TODO Auto-generated method stub
		super.setDireccion(direccion);
	}	
}
