package net.javaguides.springboot.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="email_id")
    private String emailId;
    @Column(name="first_name")

    private String firstName;
    @Column(name="last_name")

    private String lastName;
    @Column(name="mobile_no")
    private String mobileNo;
    @Column(name="dob")
    private String dob;
    @Column(name="address")
    private String address;



    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmailId() {
        return emailId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public String getDob() {
        return dob;
    }

    public String getAddress() {
        return address;
    }
}
