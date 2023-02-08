package com.example.demo.Entity;
import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class IntermediateEntity
{
	@Id
	private String to_id;
	private String intermediate;
	public IntermediateEntity(String to_id, String intermediate) {
		super();
		this.to_id = to_id;
		this.intermediate = intermediate;
	}
	@Override
	public String toString() {
		return "IntermediateEntity [to_id=" + to_id + ", intermediate=" + intermediate + "]";
	}

	public String getTo_id() {
		return to_id;
	}
	public void setTo_id(String to_id) {
		this.to_id = to_id;
	}
	public String getIntermediate() {
		return intermediate;
	}
	public void setIntermediate(String intermediate) {
		this.intermediate = intermediate;
	}
	public IntermediateEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

}


