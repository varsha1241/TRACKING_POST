package com.example.demo.Entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
@Entity
@Table(name = "location")
public class CustomerEntity
{
	@Id
	private String tracking;
	private String product_shiped;
	private String email;
	private String phone;
	private String from_to_id;
	public CustomerEntity(String tracking, String product_shiped, String email, String phone, String from_to_id) {
		super();
		this.tracking = tracking;
		this.product_shiped = product_shiped;
		this.email = email;
		this.phone = phone;
		this.from_to_id = from_to_id;
	}
	public String getFrom_id() {
		return from_to_id;
	}
	public void setFrom_id(String from_to_id) {
		this.from_to_id = from_to_id;
	}
	public String getTracking() {
		return tracking;
	}
	public void setTracking(String tracking) {
		this.tracking = tracking;
	}
	public String getProduct_shiped() {
		return product_shiped;
	}
	public void setProduct_shiped(String product_shiped) {
		this.product_shiped = product_shiped;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		return "Location [tracking=" + tracking + ", product_shiped=" + product_shiped + ", email=" + email + ", phone="
				+ phone + ", from_id=" + from_to_id + "]";
	}
	public CustomerEntity() 
	{
		super();
		// TODO Auto-generated constructor stub
	}
	
}
	