package Array;

import java.util.Arrays;

public class Demo07 {
    public static void main(String[] args) {

        int[][] array1 = new int[11][11];
        array1[1][2] = 1;
        array1[2][3] = 1;

        for (int[] ints : array1){
            for ( int anInt : ints){
                System.out.print(anInt + "\t");
           }
            System.out.println();
        }

        System.out.println("==============================");
        int sum = 0;
        for (int i = 0; i < 11 ; i ++){
            for (int j = 0 ; j < 11; j++){
                if (array1[i][j]!=0){
                    sum++;
                }
            }
        }
        System.out.println(sum);

        System.out.println("===========Sparse array===================");
        int[][] array2 = new int[sum+1][3];
        array2[0][0] = 11;
        array2[0][1] = 11;
        array2[0][2] = sum;

        int count = 0;
        for (int i=0; i<array1.length; i++){
            for (int j=0; j<array1[i].length; j++){
                if (array1[i][j]!=0){
                    count++;
                    array2[count][0] = i;
                    array2[count][1] = j;
                    array2[count][2] = array1[i][j];
                }
            }
        }

        for (int i =0; i < array2.length; i++){
            System.out.println(Arrays.toString((array2[i])));
        }


        System.out.println("==============================");

        int[][] array3 = new int[array2[0][0]][array2[0][1]];
        for (int i =1; i<array2.length; i++){
            array3[array2[i][0]][array2[i][1]] = array2[i][2];
        }
        for (int[] ints : array3){
            for ( int anInt : ints){
                System.out.print(anInt + "\t");
            }
            System.out.println();
        }

    }

}
