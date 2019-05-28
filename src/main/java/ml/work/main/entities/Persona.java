package ml.work.main.entities;



import java.util.Date;

import javax.persistence.Column;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
//@Entity
//@Table(name = "elbuensabor_persona")
@MappedSuperclass
public abstract class Persona {
	//@Id
	//@Column(name = "persona_id")
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	//protected int id;
	@Column(name = "persona_nombre")
	protected String nombre_persona;
	@Column(name = "persona_dni")
	protected int dni;
	@Column(name = "persona_password")
	protected String password;
	@Column(name = "persona_telefono")
	protected int telefono;
	@Column(name = "persona_email")
	protected String email;
	@Column(name = "persona_baja")
	protected Date baja;
	@Column(name = "persona_alta")
	protected Date alta;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name= "id_domicilio")
	protected Domicilio direccion;

	public Persona() {

	}

	public Persona(String nombre_persona, int dni, String password, int telefono, String email, Domicilio direccion, Date baja, Date alta) {
		this.nombre_persona = nombre_persona;
		this.dni = dni;
		this.password = password;
		this.telefono = telefono;
		this.email = email;
		this.direccion = direccion;
		this.alta = alta;
		this.baja = baja;
	}

	public String getNombre_persona() {
		return nombre_persona;
	}

	public void setNombre_persona(String nombre_persona) {
		this.nombre_persona = nombre_persona;
	}

	public int getDni() {
		return dni;
	}

	public void setDni(int dni) {
		this.dni = dni;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getTelefono() {
		return telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Domicilio getDireccion() {
		return direccion;
	}

	public void setDireccion(Domicilio direccion) {
		this.direccion = direccion;
	}

	public Date getBaja() {
		return baja;
	}

	public void setBaja(Date baja) {
		this.baja = baja;
	}

	public Date getAlta() {
		return alta;
	}

	public void setAlta(Date alta) {
		this.alta = alta;
	}
	
}
