package com.ttit.core.http;

/**
 * [
 *     { "id":"1","name":"基神","age":"18" },
 *     { "id":"2","name":"B神","age":"18"  },
 *     { "id":"3","name":"曹神","age":"18" }
 * ]
 */
public class Person {

    /**
     * id : 1
     * name : 基神
     * age : 18
     */

    private String id;
    private String name;
    private String age;

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

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", age='" + age + '\'' +
                '}';
    }
}
