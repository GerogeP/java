package Array;

public class Demo01 {
    public static void main(String[] args) {
        int[] nums;
        int nums2[];

        nums = new int[10];
        System.out.println(nums.length);
    // static init
        int[] a = {1, 2, 3,4, 5};
        System.out.println(a[0]);

    //dynamic init
    int[] b = new int[10];
    b[0] = 10;

        System.out.println(b[0]);



    }

}
