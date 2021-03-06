package com.cfcp.incc.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class User extends BaseEntity implements Serializable {

    private static final long serialVersionUID = -3080553479358151186L;

    public static final Integer STATUS_DESABLE = 0;
    public static final Integer STATUS_ENABLE = 1;
    public static final Integer STATUS_DELETED = -1;
    public static final String DEFAULT_PASSWORD = "123456";

//    private String id;

    private String idCard;

    private String password;

    private String name;

    private String mail;

    private String phone;

    private String distributorId;

    private Distributor distributor;

    private Date createTime;

    private String creator;

    private Integer status;

    private Set<Role> roles = new HashSet<>();

    public User() {
    }

    public User(String id, String idCard, String password, String name, String mail, String phone, String distributorId, Date createTime, String creator, Integer status) {
        this.id = id;
        this.idCard = idCard;
        this.password = password;
        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.distributorId = distributorId;
        this.createTime = createTime;
        this.creator = creator;
        this.status = status;
    }

//    @Override
//    public String getId() {
//        return id;
//    }
//
//    @Override
//    public void setId(String id) {
//        this.id = id;
//    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDistributorId() {
        return distributorId;
    }

    public void setDistributorId(String distributorId) {
        this.distributorId = distributorId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Distributor getDistributor() {
        return distributor;
    }

    public void setDistributor(Distributor distributor) {
        this.distributor = distributor;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (password != null ? !password.equals(user.password) : user.password != null) return false;
        return name != null ? name.equals(user.name) : user.name == null;
    }

    @Override
    public int hashCode() {
        int result = password != null ? password.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    public void addRole(Role role) {
        roles.add(role);
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", idCard='" + idCard + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", mail='" + mail + '\'' +
                ", phone='" + phone + '\'' +
                ", distributorId='" + distributorId + '\'' +
                ", createTime=" + createTime +
                ", creator='" + creator + '\'' +
                ", status=" + status +
                ", roles=" + roles +
                '}';
    }
}