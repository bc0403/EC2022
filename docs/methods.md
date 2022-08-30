# 电路分析的基本方法和定理

::: tip

1. 电路等效概念：接口处电压、电流保持不变；

2. 电路等效计算，即**输入电阻/等效电阻**计算（针对一端口网络）

   * 	若仅含电阻，等效化简即可；

   * 	若含受控源，但不含独立源，施加电压求电流，或者施加电流求电压；

   * 	若含独立源，则先将其 turn off（电压源短路，电流源开路），再计算；

3. 电阻电路的分析

   * 串联分压，总电阻为各电阻之和；并联分流，总电导为各电导之和；
   * Weatstone电桥：平衡时电阻成比例，流过电流计电流为零；

4. 电容电感串并联

   * 电感类似于电阻，串联则电感值相加，并联则电感值的倒数相加；

   * 电容并联则电容值相加，类似于电阻串联；电容串联则电容值倒数相加，类似于电阻并联

5. Y-Δ等效变换

   * $\Delta$ to Y: $\frac{相邻之积}{周长之和}$

   * Y to $\Delta$: $\frac{两两相乘之和}{对面电阻}$
   * $\Delta$ 阻值比较大，更像并联；Y 阻值比较小，更像串联；当阻值相等时，$R_{\Delta} = 3R_Y$

6. 网孔电流法

   * 以 $l$ 个网孔电流为变量，对 $l$ 个网孔列KVL方程，求解线性方程组；

   * 若含电流源，因电流源两端电压不能确定，故采用超级网孔避开电流源，再列线性方程求解；

7. 节点电压法

   *  以 *n*-1 个节点电压为变量，对 *n*-1 个节点列 *n*-1 个KCL方程，求解线性方程组；

   *  若含电压源，因流过电压源的电流不能确定，故采用广义节点把电压源包含进来，再列线性方程组求解；

8. 叠加定理（线性电路齐次性）

   * 线性：齐次性、可加性
   * 功率不可直接叠加

   * 分别计算每个独立源的贡献（考虑一个独立源时，其他独立源均设为零/turn off），再线性叠加；适用于有多个独立源的线性电路

9. 替代定理：保持接口电压或电流不变，用电压源或电流源替代

10. 戴维南定理：开路电压 & 等效电阻

11. 诺顿定理：短路电流 & 等效电阻

12. 最大功率传递定理：对于电阻网络，负载电阻 = 戴维南等效电阻

13. 电源变换。”电压源串联电阻“ 等价于 ”电流源并联电阻“

:::

# 习题及参考解答

## 知识点1： 电路等效及相关计算

1、右图所示电路的等效电阻为 ________ 。

<img src="./methods.assets/2-1-1.png" alt="2-1-1" style="zoom:60%;" />

A. 4 Ω	B. 1 Ω	C. ﹣2 Ω	D. 2 Ω





2、右图所示电路的等效电阻 $R_{AB}$ = ________ 。

<img src="./methods.assets/2-1-2.png" alt="2-1-2" style="zoom:60%;" />



3、理想电压源和理想电流源串联，其等效电路为 ________ 。



4、右图的等效电容为 ________ 。

<img src="./methods.assets/2-1-4.png" alt="2-1-4" style="zoom:60%;" />



5、【待修改】右图所示电路的等效电路为 ________ 。

<img src="./methods.assets/2-1-5-0.png" alt="2-1-5-0" style="zoom: 50%;" />

A. <img src="./methods.assets/2-1-5-A.png" alt="2-1-5-A" style="zoom: 33%;" />	B. <img src="./methods.assets/2-1-5-B.png" alt="2-1-5-B" style="zoom:33%;" />	C. <img src="./methods.assets/2-1-5-C.png" alt="2-1-5-C" style="zoom:33%;" />	D. <img src="./methods.assets/2-1-5-D.png" alt="2-1-5-D" style="zoom:33%;" />



**参考解答**

1. C
2. $\frac{R}{1-a}$
3. 电流源        电压源
4. 8 F
5. A



## 知识点2：电阻电路的分析

1、右图中，电流 $I$ 为 ________ 。

<img src="./methods.assets/2-2-1.png" alt="2-2-1" style="zoom: 50%;" />



2、计算右图中的 $v_o$ 值为 ________ 。

<img src="./methods.assets/2-2-2.png" alt="2-2-2" style="zoom: 67%;" />



3、下图所示电路中，电压 U 为 ________ 。

<img src="./methods.assets/2-2-3.png" alt="2-2-3" style="zoom:60%;" />

A. 4V		B. 5V		C. 6V		D. 3V



4、下图中受控电流源的转移电导 $g=0.01mS$ ，则20 KΩ电阻两端的电压为<u>__  __</u>。



<img src="./methods.assets/2-2-4.png" alt="2-2-4" style="zoom:60%;" />



5、Wheatstone 电桥广泛应用于电阻测量，已知待测电阻 $R_x$ 的阻值范围为 0 ─ 10 Ω，某同学设计了如下电路，其中 *G* 是电流计，问：

(a) 该同学的设计思路是什么（即如何实现电阻测量）？

(b)  $R_1$ 和 $R_3$ 应如何选取？

<img src="./methods.assets/2-2-5.png" alt="2-2-5" style="zoom:50%;" />



6、求下图所示电路中电流 $I_1$ 和 $I_2$ ，并计算各电源的功率，同时判断该电源是吸收还是发出功率。

<img src="./methods.assets/2-2-6.png" alt="2-2-6" style="zoom: 50%;" />



7、欲使下图所示电路中的支路电流 $I$ = 1 A，试求电流源的输出电流 $I_S$ 。

<img src="./methods.assets/2-2-7.png" alt="2-2-7" style="zoom:50%;" />



**参考解答**

1. $-0.2$ A

2. 3.2 V

3. C

4. 2 V

5. (a) 调节 50 Ω 变阻器，当电桥平衡（电流计电流为0）时，通过比值关系获得待测电阻 $R_x$ 的阻值；

   (b) $R_1$ : $R_3$ 应为 5:1，可选取 100 Ω、20 Ω。

6. 方法一：

   根据各电流量之间的关系、18 V 和 20 V 电压源在负载上的电压降关系，以及左侧大回路的回路电压降关系，列方程组如下：
   $$
   \begin{cases}
   I_1+I_3+I_4=0 \\
   I_1+2=I_2 \\
   I_4=I_5+I_6 \\
   I_5=\frac{18}{2} \\
   (-I_3×3)+I_1×3+I_2×4=20 \\
   I_4×6+I_5×2=I_3×3
   \end{cases}
   $$
   解得：$I_1=2A,I_2=4A,I_3=\frac{2}{3}A,I_4=-\frac{8}{3}A,I_5=9A,I_6=-\frac{35}{3}A$ 

   <img src="./methods.assets/image-20220830084233037.png" alt="image-20220830084233037" style="zoom:50%;" />

   20 V 电压源的功率为： $P=(I_2-2)×(-20V)=-40W$ ，发出功率

   2 A 电流源的功率为： $P=(-2A)×U=(-2A)×(I_2×4Ω+5Ω×2A)=-52W$ ，发出功率

   18 V 电压源的功率为：$18V×I_6=-210W$ ，发出功率

   方法二：

   (1) 等效电路

   ![image-20220830074153522](./methods.assets/image-20220830074153522.png)

   得：$I_1=\frac{6+20-8}{2+3+4}=2A$ 

   20 V 电压源的功率为 $P=-20V×2A=-40W$ ，发出功率

   (2) 等效电路

   ![image-20220830074219059](./methods.assets/image-20220830074219059.png)

​    得：$I_2=\frac{5}{5+4}×(5.2+2)=4A$ 

​    原电路 $U=5×2+4×4=26V$ 

​    2 A 电流源的功率为 $P=(-2A)×26V=-52W$ ，发出功率

​    (3) 18 V 电压源的功率为

​    $∵3×2+4×4-20-3I_3=0,∴I_3=\frac{2}{3}A$ 

​    $∵I_4=-(2+\frac{2}{3})=-\frac{8}{3}A ,I_5=\frac{18}{2}=9A$ 

​    $∴I_6=I_4-I_5=-\frac{8}{3}-9=\frac{-35}{3}A$ 

​    $∴P=18V×I_6=18×(-\frac{35}{3})W=-210W$ ，发出功率

7. $V_{ca}=1Ω×1A=1V,V_{cb}=V_{ca}+V_{ab}=1+2=3V,I_{cb}=\frac{V_{cb}}{1Ω}=3A$ 

   $I_{dc}=I+I_{cb}=1+3=4A,V_{da}=V_{dc}+V_{ca}=(I_{dc}×1Ω-2V)+V_{ca}=3V$ 

   $I_{da}=\frac{V_{da}}{3Ω}=1A,I_s=I_{da}+I_{dc}=1A+4A=5A$ 



## 知识点3：Y-$\Delta$ 等效变换

1、已知电路中 $\Delta$ 形电路中三个电阻均为 120Ω ，那么转换后的 Y 形电路中的三个电阻分别为 ____ 。

A. 40 Ω、40 Ω、40 Ω				B. 360 Ω、360 Ω、360 Ω

C. 120 Ω、120 Ω、120 Ω		 D. 360 Ω、360 Ω、40 Ω



2、求下图电路的等效电阻 $R_{eq}$ 。

<img src="./methods.assets/2-3-2.png" alt="2-3-2" style="zoom:60%;" />



3、求下图所示电路中的支路电流 $I_1、I_2和I_3$ 。

<img src="./methods.assets/2-3-3.png" alt="2-3-3" style="zoom: 50%;" />



**参考解答**

1. A

2. <img src="./methods.assets/image-20220830085556223.png" alt="image-20220830085556223" style="zoom:50%;" />

3. 首先 $Z_Y=2Ω$ 变换为 $Z_Δ=6Ω$ ； $6Ω$ 与 $1Ω$ 并联得到 $\frac{6}{7}Ω$ ；在 $Δ→Y$ 转换得到 $\frac{2}{7}Ω$ 。

   通过叠加定理或者网孔电流法可计算得到：

$$
\begin{cases}\frac{2}{7}I_1+\frac{2}{7}I_3=12 \\\frac{2}{7}I_2+\frac{2}{7}I_3=30 \\I_1+I_2=I_3\end{cases}⇒\begin{cases}I_1=-7A \\I_2=56A \\I_3=49A\end{cases}
$$

<img src="./methods.assets/image-20220830092323304.png" alt="image-20220830092323304" style="zoom:50%;" />



## 知识点4：网孔电流法

1、用网孔电流法求解下图所示电路中的三个网孔电流 $I_1$、$I_2$ 和 $I_3$ 。

<img src="./methods.assets/2-4-1.png" alt="2-4-1" style="zoom:60%;" />



2、回路电流法是根据 ________ 定律列出的；节点电压法是根据 ________ 定律列出的。



3、用网孔法求下图所示电路中支路电流 $I_4$ 。

<img src="./methods.assets/2-4-3.png" alt="2-4-3" style="zoom:50%;" />



4、用网孔电流法求解下图所示电路中的支路电流 $i$ 。

<img src="./methods.assets/2-4-4.png" alt="2-4-4" style="zoom: 40%;" />



5、用网孔电流法求下图所示电路中的电流 $I_1$ 和 $V_o$ 。

<img src="./methods.assets/2-4-5.png" alt="2-4-5" style="zoom: 60%;" />



6、用网孔电流法求如下图所示电路中的电压 $v$。

<img src="./methods.assets/2-4-6.png" alt="2-4-6" style="zoom: 60%;" />



**参考解答**

1. 解：

$$
\begin{cases}
(1+2+5)I_1-2I_2-5I_3=0 \\
-26 + (2+4)I_2 - 2I_1 + (5+8)I_3 - 5I_1 = 0 \\
I_3-I_2=2
\end{cases}
$$

​        计算得： $I_1=1.84A,I_2=0.68A,I_3=2.68A$ 

<img src="./methods.assets/image-20220830134210480.png" alt="image-20220830134210480" style="zoom:50%;" />

2. KVL    KCL

3. 解：

   设回路电流 $I_a$ 、$I_b$ 和 $I_c$ ，参考方向如图所示。

   <img src="./methods.assets/解-2-4-3.png" alt="解-2-4-3" style="zoom:50%;" />

   (1)将VCVS看作独立源建立方程：
   $$
   \begin{cases}
   -2 + 4I_a - 3I_b = 0 \\
   -3I_a + 6I_b - I_c + 3U_2 = 0 \\
   -3U_2 -I_b + 3I_c = 0
   \end{cases}
   $$
   (2)找出控制量和回路电流关系：
   $$
   U_2 = 3(I_b - I_a)
   $$
   将其代入 (1) 中的方程租，可以解得：
   $$
   \begin{cases}
   I_a = 1.186 A \\
   I_b = 0.915 A \\
   I_c = -0.508 A
   \end{cases}
   $$
   故有 $I_4 = I_b - I_c = 1.42 A$ 

   <img src="./methods.assets/image-20220830134830002.png" alt="image-20220830134830002" style="zoom:50%;" />

   

4. 设回路电流$I_1$ 、$I_2$ 和 $I_3$ ，参考方向如图所示。

   <img src="./methods.assets/解-2-4-4.png" alt="解-2-4-4" style="zoom:60%;" />

   列网孔电流方程如下：
   $$
   \begin{cases}
   6 = 12i_1 - 2i_2 \\
   -8 = 7i_2 -2i_1 -i_3 \\
   -8 + 6 + 6i_3 -i_2 = 0
   \end{cases}
   $$
   解得： $i_1=0.329A,i_2=-1.026A,i_3=0.162A$ 

   故而 $i=i_3-i_2=1.19A$ 

   <img src="./methods.assets/image-20220830135418267.png" alt="image-20220830135418267" style="zoom:50%;" />

   

5. 解：

   设回路电流 $I_1$ 、$I_2$ 和 $I_3$ ，参考方向如图所示。

   <img src="./methods.assets/解-2-4-5.png" alt="解-2-4-5" style="zoom: 50%;" />

   用网孔分析法列出电路方程
   $$
   \begin{cases}
   (R_1+R_2+R_3)I_1-R_2I_2-R_3I_3=0 \\
   -R_2I_1+(R_2+R_4+R_5)I_2-R_5I_3=-14 \\
   I_3=1.4I_1
   \end{cases}
   $$
   将元件参数代入上述方程，得：
   $$
   \begin{cases}
   21.5I_1-2.5I_2-15I_3=0 \\
   -2.5I_1+12.5I_2-2I_3=-14 \\
   I_3=1.4I_1
   \end{cases}
   $$
   求解方程组，得：$I_1=5A,I_2=1A,I_3=7A$ 

   故而 $V_o=R_3(I_1-I_3)+R_5(I_2-I_3)=15×(5-7)+2×(1-7)=-42V$ 

   <img src="./methods.assets/image-20220830135854311.png" alt="image-20220830135854311" style="zoom:50%;" />

   

6. 解：

   网孔电流都取顺时针方向，设受控电流源 $v$ 的电压为 $v_x$ ，参考极性上正下负.

   <img src="./methods.assets/解-2-4-6.png" alt="解-2-4-6" style="zoom:50%;" />

   则根据网孔法有：
   $$
   \begin{cases}
   2(i_{1}-i_3)+v_x-12=0 \\
   -v_x+(1+3)i_2-1×i_3=0 \\
   i_3=2
   \end{cases}
   $$
   因受控电流源引入附加方程为 $i_1-i_2=v$ 

   因受控源控制量 $v$ 引入的附加方程为 $v=3i_2$ 

   联立解得：$\begin{cases} i_1=6A \\ i_2=1.5A \\ i_3 = 2A \end{cases}$ 	因此，$v=3i_2=4.5V$ 

   <img src="./methods.assets/image-20220830140515819.png" alt="image-20220830140515819" style="zoom:50%;" />



## 知识点5：节点电压法

1、用节点电压法求下图所示电路中的电压*U* 。

<img src="./methods.assets/2-5-1.png" alt="2-5-1" style="zoom:60%;" />



2、用节点电压法求解下图中的电流 $I_0$ 及电压 $V_1,V_2,V_3$ 。

<img src="./methods.assets/2-5-2.png" alt="2-5-2" style="zoom: 67%;" />



3、求以下无源单口网络的输入电阻 $R_i$ 。已知 $R_1$ = $R_2$ = $R_3$ = $R_4$ = $R_5$ = 3Ω，$R_6$ = 1Ω。

<img src="./methods.assets/2-5-3.png" alt="2-5-3" style="zoom:67%;" />



4、使用节点电压法求解下图中的 $v_1$ 、$v_2$ 和 $v_3$ 。

<img src="./methods.assets/2-5-4.png" alt="2-5-4" style="zoom: 67%;" />



5、列写图示电路的节点电压方程。

<img src="./methods.assets/2-5-5.png" alt="2-5-5" style="zoom:60%;" />



6、用节点电压法分析如下电路，列出足够求解的方程。

<img src="./methods.assets/2-5-6.png" alt="2-5-6" style="zoom: 67%;" />



7、用节点电压法求下图所示电路的节点电压 $V_{na}、V_{nb}、V_{nc}和i_x$ 。

<img src="./methods.assets/2-6-7.png" alt="2-6-7" style="zoom:60%;" />



8、用节点电压法求解下图所示电路中的支路电流 $I_b$ 。

<img src="./methods.assets/2-5-8.png" alt="2-5-8" style="zoom:67%;" />



9、用节点电压法求以下电路中各节点的电压。

<img src="./methods.assets/2-5-9.png" alt="2-5-9" style="zoom:60%;" />



10、用节点电压法求下图所示电路中电流源两端的电压 *v* 。

<img src="./methods.assets/2-5-10.png" alt="2-5-10" style="zoom:60%;" />



**参考解答**

1. 解：【待补充】

   

2. 解：

   列节点电压方程如下：
   $$
   \begin{cases}
   V_1=10 V \\
   (V_2-V_1)/5+(V_2-V3)/2-2I_0=0 \\
   -I_0+(V_3-V_2)/2+V_3/8=0
   \end{cases}
   $$
   增补方程 $I_0=(V_1-V_3)/4$ 

   解得： $V_1=10 V,V_2=10 V_3=\frac{60}{7} V,I_0=\frac{5}{14} A$ 

   <img src="./methods.assets/image-20220830144126771.png" alt="image-20220830144126771" style="zoom:50%;" />

   

3. 解：

   方法1：

   选取参考地，并对图中的节点电压进行标记如下：

   <img src="./methods.assets/解-2-5-3.png" alt="解-2-5-3" style="zoom: 67%;" />

   列节点电压方程如下：
   $$
   \begin{cases}
   V_1/R_2+(V_1-V_2)/R_5+(V_1-V_3)/R_1=0 \\
   V_2/R_4+(V_2-V_1)/R_5+(V_2-V_3)/R_3=0 \\
   V_3=3I×R_6 
   \end{cases}
   $$
   为简化计算过程，可取 $I=1 A$ 

   计算得到： $V_1=V_2=\frac{3}{2}V,V_3=3V,I_{in}=I+V_1/R_2+V_2/R_4=2A$ 

   故而输入电阻 $R_i=\frac{U}{I_{in}}=\frac{V_3}{I_{in}}=\frac{3}{2}Ω$ 

   <img src="./methods.assets/image-20220830150351847.png" alt="image-20220830150351847" style="zoom:50%;" />

   方法2：

   左边电路用Y-$\Delta$ 化简，等效为3Ω电阻；右边电路令$I = 1A$, 电压=3V，即右边等效为3Ω，故整体等效电阻为1.5Ω

   

4. 解：

   列节点电压方程如下：
   $$
   \begin{cases}
   \frac{1}{2}V_1+\frac{1}{4}V_2+\frac{1}{3}V_3=0 \\
   V_1-V_2=25 \\
   V_3-V_2=5×\frac{1}{2}V_1
   \end{cases}
   $$
   解得： $V_1=7.61V,V_2=-17.39V,V_3=1.63V$ 

   <img src="./methods.assets/image-20220830150749269.png" alt="image-20220830150749269" style="zoom:50%;" />

   

5. 解：

   标记节点①~④如下图所示：

   <img src="./methods.assets/解-2-5-5.png" alt="解-2-5-5" style="zoom:60%;" />

   列节点电压方程如下：
   $$
   \begin{cases}
   V_1=14 \\
   (\frac{1}{2}+\frac{1}{3}+\frac{1}{5})V_2-\frac{1}{2}V_1-\frac{1}{3}V_3=0 \\
   (\frac{1}{3}+\frac{1}{4})V_3-\frac{1}{4}V_1-\frac{1}{3}V_2=-\frac{12}{4}-5I_1
   \end{cases}
   $$
   增补方程 $I_1=\frac{V_1-V_3-12}{4}$ 

   

6. 解：

   列三个节点方程如下：
   $$
   \begin{cases}
   (\frac{1}{R_1}+\frac{1}{R_2})U_1 - \frac{1}{R_2}U_2 = I_s \\
   -\frac{1}{R_2}U_1 + (\frac{1}{R_2}+\frac{1}{R_3})U_2 = g_mU_{R_2} \\
   \frac{1}{R_4}U_3 = -g_mU_{R_2}
   \end{cases}
   $$
   另需要一个补充方程
   $$
   U_{R_2} = U_1 - U_2
   $$

7. 解：

   方法1：

   设受控电压源流出的电流为 $i$ 
   $$
   \begin{cases}
   \frac{1}{90}V_{na}-\frac{1}{90}V_{nb}=2+i \\
   -\frac{1}{90}V_{na}+(\frac{1}{90}+\frac{1}{60}+\frac{1}{180})V_{nb}-\frac{1}{60}V_{nc}=0 \\
   -\frac{1}{60}V_{nb}+(\frac{1}{90}+\frac{1}{60})V_{nc}=-i \\
   V_{na}-V_{nc}=30i_x \\
   i_x=\frac{1}{90}(V_{na}-V_{nb})
   \end{cases}
   $$
   解得： $V_{na}=135V,V_{nb}=108V,V_{nc}=126V,i=-1.7A,i_x=0.3A$ 

   方法2：
   $$
   \begin{cases}
   \frac{1}{90}V_{na}-(\frac{1}{90}+\frac{1}{60})V_{nb}+(\frac{1}{90}+\frac{1}{60})V_{nc}=2 \\
   对点b:-\frac{1}{90}V_{na}+(\frac{1}{90}+\frac{1}{60}+\frac{1}{180})V_{nb}-\frac{1}{60}V_{nc}=0 \\
   另外,V_{na}-V_{nc}=30i_x=\frac{30}{90}(V_{na}-V_{nb})
   \end{cases}
   $$

   $$
   ⇒
   \begin{cases}
   2V_{na}-5V_{nb}+5V_{nc}=360 \\
   -2V_{na}+6V_{nb}-3V_{nc}=0 \\
   2V_{na}+V_{nb}-3V_{nc}=0
   \end{cases}
   ⇒
   \left(
   \begin{matrix}
   	2 & -5 & 5 \\
   	-2 & 6 & -3 \\
   	2 & 1 & -3
   	\end{matrix}
   \right)
   
   \left(
   \begin{matrix}
   	V_{na} \\
   	V_{nb} \\
   	V_{nc}
   	\end{matrix}
   \right)
   =
   \left(
   \begin{matrix}
   	360 \\
   	0 \\
   	0
   	\end{matrix}
   \right)
   $$

   解得：
   $$
   \left(
   \begin{matrix}
   	V_{na} \\
   	V_{nb} \\
   	V_{nc}
   	\end{matrix}
   \right)
   =
   \left(
   \begin{matrix}
   	135 \\
   	108 \\
   	126
   	\end{matrix}
   \right)V,i_x = 0.3
   $$
   <img src="./methods.assets/image-20220830152349848.png" alt="image-20220830152349848" style="zoom:50%;" />

   

8. 解：

   单节点
   $$
   \begin{cases}
   (\frac{1}{250}+\frac{1}{50}+\frac{1}{150})V=\frac{24}{250}+\frac{60I_b}{150} \\
   I_b=\frac{24-V}{250}
   \end{cases}
   $$
   解得： $I_b=\frac{48}{605}≈0.079A$ 

   <img src="./methods.assets/image-20220830152717490.png" alt="image-20220830152717490" style="zoom:50%;" />

   

9. 解：

   假设 $v_{n3}=0V$ ，则有
   $$
   \begin{cases}
   (\frac{1}{2}+\frac{1}{3+2})v_{n1}-\frac{1}{2}v_{n2}=4-10 \\
   -\frac{1}{2}v_{n1}+(\frac{1}{2}+3+\frac{2×6}{2+6})v_{n2}=10
   \end{cases}
   $$
   整理后，得到：
   $$
   \begin{cases}
   0.7v_{n1}-0.5v_{n2}=-6 \\
   -0.5v_{n1}+5v_{n2}=10
   \end{cases}
   $$
   解得：
   $$
   \begin{cases}
   v_{n1}≈-7.69V \\
   v_{n2}≈1.23V
   \end{cases}
   $$
   <img src="./methods.assets/image-20220830153244527.png" alt="image-20220830153244527" style="zoom:50%;" />

   

10. 解：

    以底端节点作为参考节点，上端三个节点的节点电压分别为 $v_{n1}$ 、 $v_{n2}$ 和 $v_{n3}$ 。

    因为与第一个节点相连接的 3 Ω 为多余电阻，则有：
    $$
    \begin{cases}
    (\frac{1}{2}+\frac{1}{2})v_{n1}-\frac{1}{2}v_{n2}-\frac{1}{2}v_{n3}=2 \\
    v_{n2}=8 \\
    -\frac{1}{2}v_{n1}-\frac{1}{2}v_{n2}+(\frac{1}{2}+\frac{1}{2}+\frac{1}{1})v_{n3}=v
    \end{cases}
    $$
    因受控源引入的附加方程为：
    $$
    v_{n1}=v-2×3
    $$
    解得：$\begin{cases} v_{n1}=13.6V \\ v_{n2}=8V \\ v_{n3}=15.2V \end{cases}$ 	得：$v=19.6V$ 

    <img src="./methods.assets/image-20220830153706672.png" alt="image-20220830153706672" style="zoom:50%;" />



## 知识点6：叠加定理

1、线性电路中，无法用叠加定理求解的物理量为 ________ 。

A. 功率	B. 电压	C. 电流	D. 相位



2、右图所示电路中，电压U为 ________ 。

<img src="./methods.assets/2-6-2.png" alt="2-6-2" style="zoom: 50%;" />

A. 4V	B. 5V	C. 6V	D. 3V



3、叠加定理仅适用于 ________ 电路；在各分电路中，要把不作用的独立电源置零。不作用的独立电压源用 ________ 代替，不作用的独立电流源用 ________ 代替。



4、叠加定理适用于 ________ 。

A. 线性电路		B. 非线性电路		C. 线性或非线性电路		D. 无受控源的电路



5、下列物理量中不可用叠加定理计算的是 ________ 。

A. 电流			B. 电压			C. 功率



6、使用叠加原理计算下图所示电路中的电流 $I$。

<img src="./methods.assets/2-6-6.png" alt="2-6-6" style="zoom: 60%;" />



7、用叠加定理求下图所示电路中电流源两端的电压 *U*。

<img src="./methods.assets/2-6-7-real.png" alt="2-6-7-real" style="zoom: 60%;" />



**参考解答**

1. A

2. C

3. 线性    短路    开路

4. A

5. C

6. 解：

   (1) 保留 8 V 的电压源，turn off 2 A 的电流源和 6 V 的电压源

   ​	  $I_1=\frac{8}{16}=\frac{1}{2}A$ 

   (2) 保留 6 V 的电压源，turn off 2 A 的电流源和 8 V 的电压源

   ​	  $I_2=-\frac{6}{16}=-\frac{3}{8}A$ 

   (3) 保留 2 A 的电流源，turn off 6 V 的电压源和 8 V 的电压源

   ​	  $I_3=2×\frac{2}{14+2}=\frac{1}{4}A$ 

   则  $I = I_1 + I_2 + I_3 = \frac{3}{8}A$ 

7. 解：

   (1) 保留 2 A 的电流源，turn off 30 V 的电压源

   ​	  $R_{eq}=2Ω||3Ω+3Ω||6Ω=\frac{2×3}{2+3}+\frac{3×6}{3+6}=3.2Ω$ 

   ​	  $U_1=R_{eq}×2A=6.4V$ 

   (2) 保留 30 V 的电压源，turn off 2 A 的电流源

   ​	  $U_2=(30-30×\frac{3}{3+2})-(30-30×\frac{6}{6+3})=12V-10V=2V$ 

   ​	  $U=U_1+U_2=8.4V$ 