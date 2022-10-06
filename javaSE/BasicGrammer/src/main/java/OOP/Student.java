package OOP;

public class Student extends Person{

    private String name;
    private int code;
    private char sex;
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age>120 || age<0){
            this.age=3;
        }else{
            this.age = age;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public char getSex() {
        return sex;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }

    public void study(){
        System.out.println(this.name+"is studing");
    }

}
