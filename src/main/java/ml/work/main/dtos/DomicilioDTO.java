package ml.work.main.dtos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import ml.work.main.entities.Distrito;
import ml.work.main.entities.Persona;

public class DomicilioDTO implements Serializable{
	
	private int id_domicilio;
	
	private String calle;
	
	private int numCasa;
	
	private int numDepartamento;
	
	private int numPiso;
	
	private Distrito distrito = new Distrito();
	
	private List<Persona> personas = new ArrayList<Persona>();

	public DomicilioDTO() {

	}

	public DomicilioDTO(int id_domicilio, String calle, int numCasa, int numDepartamento, int numPiso,
			Distrito distrito, List<Persona> personas) {
		this.id_domicilio = id_domicilio;
		this.calle = calle;
		this.numCasa = numCasa;
		this.numDepartamento = numDepartamento;
		this.numPiso = numPiso;
		this.distrito = distrito;
		this.personas = personas;
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

	public List<Persona> getPersonas() {
		return personas;
	}

	public void setPersonas(List<Persona> personas) {
		this.personas = personas;
	}
	

}
