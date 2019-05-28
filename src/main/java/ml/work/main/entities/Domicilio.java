package ml.work.main.entities;

import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "apirest_domicilio")
public class Domicilio {

	@Id
	@Column(name="id_domicilio")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_domicilio;
	
	@Column(name = "calle")
	private String calle;
	
	@Column(name = "numeroCasa")
	private int numCasa;
	
	@Column(name = "numeroDepartamento")
	private int numDepartamento;
	
	@Column(name = "numeroPiso")
	private int numPiso;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_Distrito")
	private Distrito distrito;

	//@OneToMany(mappedBy = "direccion")
	//private List<Persona> personas = new ArrayList<Persona>();
	
	public Domicilio() {

	}

	public Domicilio(int id_domicilio, String calle, int numCasa, int numDepartamento, int numPiso,
			Distrito distrito, 
			ArrayList<Persona> personas 
			) {
		this.id_domicilio = id_domicilio;
		this.calle = calle;
		this.numCasa = numCasa;
		this.numDepartamento = numDepartamento;
		this.numPiso = numPiso;
		this.distrito = distrito;
		/* this.personas = personas; */
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public int getNumCasa() {
		return numCasa;
	}

	public void setNumCasa(int numCasa) {
		this.numCasa = numCasa;
	}

	public int getNumDepartamento() {
		return numDepartamento;
	}

	public void setNumDepartamento(int numDepartamento) {
		this.numDepartamento = numDepartamento;
	}

	public int getNumPiso() {
		return numPiso;
	}

	public void setNumPiso(int numPiso) {
		this.numPiso = numPiso;
	}

	public Distrito getDistrito() {
		return distrito;
	}

	public void setDistrito(Distrito distrito) {
		this.distrito = distrito;
	}

	public int getId_domicilio() {
		return id_domicilio;
	}

	public void setId_domicilio(int id_domicilio) {
		this.id_domicilio = id_domicilio;
	}

//	public List<Persona> getPersonas() {
//		return personas;
//	}
//
//	public void setPersonas (List<Persona> personas) {
//		this.personas = personas;
//	}

	
}
