package com.example.demo.Entity;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
@Entity
@Table(name = "delivery")
public class Delivery implements Serializable 
{
	private static final long serialVersionUID = -7280187378770180724L;
	@Id
	@NotEmpty(message = "Name may not be null")
	private String id;
	@NotEmpty(message = "Name may not be null")
	private String name;
	@NotEmpty(message = "Name may not be null")
	private String phonenumber;
	public Delivery() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Delivery [id=" + id + ", name=" + name + ", phonenumber=" + phonenumber + "]";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Delivery(String id, String name, String phonenumber) {
		super();
		this.id = id;
		this.name = name;
		this.phonenumber = phonenumber;
	}

}