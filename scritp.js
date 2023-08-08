/*
Time compleity

-time complexity
-space complexity

time complexity =>amount of time by an algorithm to run;
space complexity => amount of momry taken by an algoritham to run;

mathamatical notication : Asympatatic Notiation

1.big -'O' (big oh -)upper bund
2.big - 
3.big - 

situation case:(inputs);

1.worest case
2.best case
3.Average case

time complexity : upper bound,worst case -Big -'O'

Example;
Algorithm: Linear search;
number = [1,2,3,4,5,6,7,8,9,10]

case(first elemts):If the Key = 1,comparision=>1 Best case =>O(1)-oder of 1

case (middle elements); If the key =5,comparisio  =>5,average case =>O(N/2)=O(N)

case (last element):If the Key =10,comparision =>10,worst case =>O(N)
                  (elament not present);If the Key =11,comparsion =>10,worst case=>O(N)


let a = 0, b = 0;
for(i=0;i<N;i++)
    {
        a = a + rand();

    }
    for(j=0;j<M;j++){
        b = b + rand();

    }
answer:
let a = 0,b = 0;//declaration ,initialization,conditionls,experssion,assigments
=>O(1),constant time.

for(i=0;i<N;i++)
    {
        a = a + rand();
  
        
total excutions = valus of i
i=0,1,2,3,4,5.......,N-1 =>N

for(j=0;j<M;j++){
        b = b + rand();

total excutions = valus of j
j=0,1,2,3,4,5.......,M-1 =>M

total time complexity = T(N,M)= 1 + N + M
                              = N + M(since 1 is constant)
                              =O(N + M).

let a = 0, b = 0;
let M = 2N;
for(i=0;i<N;i++)
    {
        a = a + rand();

    }
   
total excutions = value of i
i=0,1,2,3.....N-1=>N

 for(j=0;j<M;j++){
        b = b + rand();

    }

    total excution = value of j
    j=0,1,2,.....M-1=>2N

    total time complexty = T(N,M)=1 +N+2N
                         = N+2N
                         =3N
                         =O(N)



let a = 0, b = 0;
for(i=0;i<N;i++)
    {
        a = a + rand()

    for(j=0;j<N;j++)
    {
  b = b + rand();

    }
}

answer:
total time complexity =T(N,M)=1+N*N
                      =1+N*N
                      =N(squ)
                     = O(N*N).
 

















*/










