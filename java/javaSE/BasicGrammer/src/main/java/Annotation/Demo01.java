package Annotation;

import java.lang.annotation.*;


@MyAnnotation(age=18)
public class Demo01 {
    @Override
    public String toString() {
        return super.toString();
    }

    @MyAnnotation(age=3)
    public void test(){

    }

}

@Target(value = {ElementType.TYPE, ElementType.METHOD})
@Retention(value = RetentionPolicy.RUNTIME)
@Documented
@Inherited
@interface MyAnnotation{
    String name() default "";
    int age();

}