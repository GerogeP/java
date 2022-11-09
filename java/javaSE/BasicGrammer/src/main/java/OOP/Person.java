package OOP;

public class Person {

    private int money = 1_0000_0000;
    private String name;

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public  Person(){
//        this.name = "name";
    }

    public Person(String name){
        this.name =name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void say(){
        System.out.println("say a world");
    }
}
