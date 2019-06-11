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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "apirest_pedido")
public class Pedido extends Comprobantes{
	
	

	@Id
	@Column(name = "pedido_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int numPedido;

	@Column(name = "pedido_total")
	private float total;
	
	
	@OneToMany(mappedBy = "pedido", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonManagedReference
	private Set<DetalleFactura> detallePedido;
	

	public Pedido() {
		super();		
	}

	public Pedido(Date fecha, LocalTime hora, String nombre_comprobante, Set<DetalleFactura> detallePedido, int numPedido, float total, Date fechaAnulado) {
		super(fecha, hora, nombre_comprobante, fechaAnulado);
		this.detallePedido = detallePedido;
		this.numPedido = numPedido;
		this.total = total;
	}

	public int getNumPedido() {
		return numPedido;
	}

	public void setNumPedido(int numPedido) {
		this.numPedido = numPedido;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}
	
	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public LocalTime getHora() {
		return hora;
	}

	public void setHora(LocalTime hora) {
		this.hora = hora;
	}

	public String getNombre_comprobante() {
		return nombre_comprobante;
	}

	public void setNombre_comprobante(String nombre_comprobante) {
		this.nombre_comprobante = nombre_comprobante;
	}

	public Set<DetalleFactura> getDetallePedido() {
		return detallePedido;
	}

	public void setDetallePedido(Set<DetalleFactura> detallePedido) {
		this.detallePedido = detallePedido;
	}	
}
