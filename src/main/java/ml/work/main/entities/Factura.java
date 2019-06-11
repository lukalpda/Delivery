package ml.work.main.entities;

import java.util.Date; 

import java.time.*;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "apirest_factura")
public class Factura extends Comprobantes {
	
	

	@Id
	@Column(name = "factura_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int numFactura;

	@Column(name = "factura_esEfectivo")
	private boolean esEfectivo;

	@Column(name = "factura_total")
	private float total;	
	
	
	
	@ManyToOne
	@JoinColumn(name = "id_comprador")	
	private Cliente cliente;
	
	
	@OneToMany(mappedBy = "factura", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonManagedReference
	private Set<DetalleFactura> detalleFactura;
	
		
	public Factura() {
		super();
	}

	public Factura(Date fecha, LocalTime hora, String nombre_comprobante, int numFactura, boolean esEfectivo,
			Set<DetalleFactura> detalleFactura, float total, Cliente cliente, Date fechaAnulado) {
		super(fecha, hora, nombre_comprobante, fechaAnulado);
		this.numFactura = numFactura;
		this.esEfectivo = esEfectivo;		
		this.detalleFactura = detalleFactura;
		this.total = total;
		this.cliente = cliente;
	}

	public int getNumFactura() {
		return numFactura;
	}

	public void setNumFactura(int numFactura) {
		this.numFactura = numFactura;
	}

	public boolean isEsEfectivo() {
		return esEfectivo;
	}

	public void setEsEfectivo(boolean esEfectivo) {
		this.esEfectivo = esEfectivo;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}
	
	public Date getFecha() {
		return super.getFecha();
	}

	public void setFecha(Date fecha) {
		super.setFecha(fecha);;
	}

	public LocalTime getHora() {
		return super.getHora();
	}

	public void setHora(LocalTime hora) {
		super.setHora(hora);
	}

	public String getNombre_comprobante() {
		return super.getNombre_comprobante();
	}

	public void setNombre_comprobante(String nombre_comprobante) {
		super.setNombre_comprobante(nombre_comprobante);;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Set<DetalleFactura> getDetalleFactura() {
		return detalleFactura;
	}

	public void setDetalleFactura(Set<DetalleFactura> detalleFactura) {
		this.detalleFactura = detalleFactura;
	}
	
	
}
