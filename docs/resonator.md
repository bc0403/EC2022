# 谐振器和滤波器

::: tip

1. 谐振的概念。
   * RLC串联谐振 & RLC并联谐振；
   * 电路化简后，需同时具有容性元件和感性元件，容性元件储存电能，感性元件储存磁能，电能和磁能周期性交换，产生谐振；
   * 电源不向电路输送无功功率，谐振时，电感中的无功功率与电容中的无功功率大小相等，互相补偿，彼此进行能量交换。
2. 谐振电路 **5** 个基本参数
   * 谐振频率：$\omega_0 = \frac{1}{\sqrt{LC}}$
   * 品质因数：$Q = \frac{\omega_o L}{R} = \frac{1}{R \omega_0 C}$ （串联谐振，理解： R小则Q大），或$Q = \frac{R}{\omega_o L} = R \omega_0 C$ （并联谐振，理解：R大则Q大）
     * Q的物理含义：总储能 比 损耗
   * 带宽：$B = \frac{\omega_0}{Q}$
   * 带宽下限频率（半功率频率1）：$\omega_1 = \omega_0 - \frac{B}{2}$
   * 带宽上限频率（半功率频率2）：$\omega_2 = \omega_0 + \frac{B}{2}$
3. 从测量角度分析 5 个基本参数
   * 中心频率、带宽、上下限频率均可测
   * 根据中心频率和带宽计算出Q值
4. 滤波器种类：低通、高通、带通、带阻
   * 一阶电路：低通或高通，可根据频率为0和频率为$\infty$的 special case 判断
   * 二阶电路：带通或带阻

:::

# 习题及参考解答

## 知识点1：谐振概念及相关计算

1、下列哪类电路可以发生谐振 ________ 。

A. 电阻电路	B. RL电路	C. RC电路	D. RLC电路



2、下图所示串联电路的谐振角频率为 ________ 。

<img src="./resonator.assets/5-1-2.png" alt="5-1-2" style="zoom: 50%;" />



3、在二阶电路中，当 $R=2\sqrt{\frac{L}{C}}$ 为临界阻尼，那么 $R>2\sqrt{\frac{L}{C}}$ 为 ________ ；而 $R<2\sqrt{\frac{L}{C}}$ 为 ________ 。



4、设计一个串联 *RLC* 谐振电路，要求谐振频率 $w_o=40rad/s$ ，带宽 $B=10rad/s$ ，若现有一个 1Ω 的电阻，则要求 L = ________ 和 C = ________ 。



5、当 *RLC* 串联电路发生谐振时，电源向 ________ 输送无功功率。

A. 电阻		B. 电容		C. 电感		D. 以上都不是



6、右图所示电路中，已知 *M* = 0.05 H，则电路的谐振频率 $f_0$ = ________ 。

<img src="./resonator.assets/5-1-6.png" alt="5-1-6" style="zoom: 50%;" />



7、电路中 $R_1$ = $R_2$ = 100 Ω，$L_1$ = $L_2$ = 1 H，C = 100 μF，$\vec{V_s}=100∠0°V$（100 V表示幅度），$\omega = 100rad/s$。求负载 $Z_L$ 能获得的最大功率。

<img src="./resonator.assets/5-1-7.png" alt="5-1-7" style="zoom: 67%;" />



8、RLC 串联谐振时，电路中的 ________ 。

A. 电流电压同相		B. 电流电压反相		C. 电流超前电压90°		D. 电流滞后电压90°



9、*RLC* 串联谐振电路的谐振频率 $f_0$ 为 ________ Hz，Q 值为 ________ 或 ________。



10、求如下串联谐振电路的谐振角频率 $\omega_0$ 、带宽 $\Delta \omega、Q$ 值，两个半功率频率 $\omega_1$ 和 $\omega_2$ 。（频率单位用rad/s表示）

<img src="./resonator.assets/5-1-10.png" alt="5-1-10" style="zoom:60%;" />



11、一个串联调谐无线电路由一个可变电容（30 pF 到 350 pF）和一个 220 μH 的天线线圈组成，线圈的电阻为 11 Ω。

(a) 求收音机可调谐的无线电信号的频率范围；

(b) 确定频率范围两端处的*Q*值。



12、*RLC* 电路的品质因数的含义是 ________ 。

A. 电路中电容和电感贮能之比

B. 电路中电容贮能与一周损耗之比

C. 电路中电感贮能与一周损耗之比

D. 电路中电感电容总贮能与一周损耗之比



13、在 RLC 串联电路中，已知 $R=1Ω,L=0.01H,C=1μF$ 。求：

(1) 该电路输入阻抗与频率之间的关系式；

(2) 谐振频率 $w_0$ ；

(3) 谐振电路的品质因数；

(4) 通频带的宽度BW。



14、LC 并联网络在信号频率大于谐振频率时呈 ________ ，在信号频率小于谐振频率时呈 ________ 。

A. 容性		B. 感性		C. 阻性		D. 不确定



15、下图是收音机调谐电路的等效电路图，其中 *r* 为电感的内阻。已知电容为100 pF、电感为200 μH，电感的内阻是400 Ω，电路的谐振频率是多少？

<img src="./resonator.assets/5-1-16-3139778.png" alt="5-1-16" style="zoom:50%;" />



16、*LC* 并联网络在谐振时呈 ________ 。

A. 容性		B. 感性		C. 阻性		D. 不确定



17、一个 *RLC* 串联谐振电路，*R* = 1 Ω， *L* = 1 mH， *C* = 0.4 µF，则该谐振电路的谐振频率为 ________ Hz，*Q*值为 ________ 。



18、 *RLC* 串联谐振电路，已知  *L* = 20 mH，*R* = 1.57 Ω，要求该电路的谐振频率 ω = 1000π rad/s，且品质因数 Q = 40，则电容 C 的电容值为 ________ 。

A. 10 μF		B. 5 μF		C. 50 μF		D. 500 μF



19、如图所示的串联谐振电路，$R=4$ $\Omega$, $L=25$ mH，品质因数为50, (a) 求 $C$; (b) 求 $\omega_1$, $\omega_2$, $B$；(c) 若 $V_m = 100$ V，求频率为 $\omega_0$, $\omega_1$, $\omega_2$ 时消耗的平均功率



20、并联谐振电路如下图所示，其中 $R=100$ k$\Omega$, $L=50$ mH, $C=2$ nF，求 $\omega_0$, $\omega_1$, $\omega_2$, $Q$, $B$

<img src="./resonator.assets/image-20221014191934783.png" alt="image-20221014191934783" style="zoom:50%;" />

21、求以下电路的谐振频率

<img src="./resonator.assets/image-20221014192055516.png" alt="image-20221014192055516" style="zoom:50%;" />

22、下图中，Q值为100，求 $\omega_0$, $\omega_1$, $\omega_2$, $B$

<img src="./resonator.assets/image-20221016212405751.png" alt="image-20221016212405751" style="zoom:40%;" />

23、如下串联 RLC 谐振电路中，已知 $C=20{\rm \mu F}$，$L=2{\rm mH}$，$R=5{\rm \Omega}$，$v_s(t)=10\cos(\omega t){\rm V}$，求：

(1)	 输入阻抗与频率之间的关系式；

(2)	谐振角频率 $\omega_0$ 和 Q 值；

(3)	带宽 $\Delta \omega$ 和两个半功率点角频率 $\omega_1$ 、$\omega_2$ 。（频率单位用 $\rm rad/s$ 表示）

<img src="./resonator.assets/image-20221108131148926.png" alt="image-20221108131148926" style="zoom:50%;" />



**参考解答**

1. D

2. 48.8 rad/s, $L = L_1 + L_2 - 2M$

3. 过阻尼      欠阻尼

4. 0.1H      6.25mF

5. D

6. 6500 Hz

7. 解：

   <img src="./resonator.assets/image-20220906171005204.png" alt="image-20220906171005204" style="zoom:60%;" /> <img src="./resonator.assets/image-20220906171033702.png" alt="image-20220906171033702" style="zoom:55%;" />

   

   ​	$j \omega L_1=j \omega L_2=j100Ω$ 

   ​	$\frac{1}{j \omega c}=-j100Ω$ 

   ​	$L_2$ 和 C 谐振，∴ $Z_{12} = \infty$ 

   ​	$\vec{V_{OC}}=\vec{V_2}=-R_2\vec{I_C}=-100\vec{I_C}$ 

   ​	$\vec{I_C}=\frac{\vec{V_1}-\vec{V_2}}{-j100}$ 

   ​	$\vec{V_1}=\frac{jwL_1}{jwL_1+R_1}\vec{V_s}=50\sqrt{2}∠45°V$ 

   ​	得：$\vec{V_{OC}}=\frac{\vec{V_1}}{1+j}=50V∠0°$ 

   ​	又有 $\vec{I_{SC}}=-\vec{I_c}=\frac{\vec{V_1}}{j100}=\frac{50+j50}{j100}=0.5(1-j)A$ 

   ​	故 $Z_{eq}=\frac{\vec{V_{OC}}}{\vec{I_{SC}}}=\frac{50}{0.5(1-j)}=(50+j50)Ω$ 

   ​	根据最大功率传输定理，当 $Z_L=Z_{eq}^*=(50-j50)Ω$ 时，可获得最大功率

   ​	$P_{max}=\frac{\vec{V_{OC}}^2}{8R_{eq}}=\frac{50^2}{8×50}=6.25W$ 

8. A

9. $\frac{1}{2π\sqrt{LC}}$        $\frac{2πf_0L}{R}$        $\frac{1}{2πf_0RC}$ 

10. 解：
  $$
  \begin{cases}
  w_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{10^{-2}×10^{-6}}} = 10^4rad/s = 10 krad/s \\
  Q = \frac{w_0L}{R} = 10 \\
  B = \frac{w_0}{Q} = 1 krad/s \\
  w_1 = w_0 - \frac{B}{2} ⇒ w_1 = 9.5 krad/s \\
  w_2 = w_0 + \frac{B}{2} ⇒ w_1 = 10.5 krad/s
  \end{cases}
  $$
  根据严格公式计算： $w_1=9.512krad/s,w_2=10.512krad/s$ 

11. 解：

    (a) $f_0=\frac{1}{2π\sqrt{LC}}$ 

    其中，$L=220μH，30pF≤C≤350pF$ 

    $0.574MHz≤f_0≤1.959MHz$ 

    (b) $Q=\frac{2πf_0L}{R}$ 

    当 $f_0=0.574MHz$ 时，$Q=72.13$ 

    当 $f_0=1.959MHz$ 时，$Q=246.18$ 

12. D

13. 解：

    (1) $Z_{in}=R+j(\omega L-\frac{1}{\omega C})$ 

    (2) 谐振角频率

    ​		$\omega_0=\frac{1}{\sqrt{LC}}=\frac{1}{\sqrt{0.01×10^{-6}}}rad/s=10^4rad/s$ 

    ​		或 $f_0=\frac{1}{2π\sqrt{LC}}≈1592Hz$ 

    (3) 品质因数

    ​		$Q=\frac{1}{R}\sqrt{\frac{L}{C}}=\sqrt{\frac{0.01}{10^{-6}}}=100$ 

    (4) BW为

    ​		$BW=\frac{\omega_0}{Q}=100rad/s$ 

    ​		或 $BW=\frac{f_0}{Q}=159.2Hz$ 

14. A    B

15. 解：

    输入导纳  $Y = j\omega C + \frac{1}{{j\omega L + r}} = j\omega C + \frac{{r - j\omega L}}{{{r^2} + {\omega ^2}{L^2}}} = \frac{r}{{{r^2} + {\omega ^2}{L^2}}} + j(\omega C - \frac{{\omega L}}{{{r^2} + {\omega ^2}{L^2}}})$ 

    谐振时导纳 *Y* 的虚部为 0

    即  ${\omega _0}C - \frac{{{\omega _0}L}}{{{r^2} + {\omega _0}^2{L^2}}} = 0$ 

    ​	 ${\omega _0} = \sqrt {\frac{1}{{CL}} - \frac{{{r^2}}}{{{L^2}}}}$		${f_0} = \frac{1}{{2\pi }}\sqrt {\frac{1}{{CL}} - \frac{{{r^2}}}{{{L^2}}}}$ 

    其中，$C=100{\rm pF},L=200{\rm \mu H}$。

    当 $r=400{\rm Ω}$ 时，$f_0≈1.08{\rm MHz}$ 

16. C

17. 7.962k      50

18. B

19. <img src="./resonator.assets/image-20221014191707670.png" alt="image-20221014191707670" style="zoom:30%;" />

20. <img src="./resonator.assets/image-20221014192000749.png" alt="image-20221014192000749" style="zoom:35%;" />

21. <img src="./resonator.assets/image-20221014192124702.png" alt="image-20221014192124702" style="zoom:30%;" />

22. <img src="./resonator.assets/image-20221016212426977.png" alt="image-20221016212426977" style="zoom:40%;" />

23. 解：

    (1)	$Z_{in}=R+j \omega L + \frac{1}{j \omega C}=(5+j\frac{2\omega^2-5\times10^7}{1000\omega}){\rm \Omega}$ ；

    (2)	$\omega_0=\frac{1}{\sqrt{LC}}=\frac{1}{\sqrt{2\times10^{-3}\times20\times10^{-6}}}=5\times10^3{\rm rad/s}$ ；

    ​		$Q=\frac{\omega_0L}{R}=2$ ；

    (3)	带宽 $B=\Delta \omega=\frac{\omega_0}{Q}=2.5\times10^3{\rm rad/s}$ ；

    ​		$\omega_1=\omega_0-\frac{\Delta \omega}{2}=3.75\times10^3{\rm rad/s}$ ；

    ​		$\omega_2=\omega_0+\frac{\Delta \omega}{2}=6.25\times10^3{\rm rad/s}$ 。

    注意：更精确地，因为此处 $Q=2<10$，采用半功率精确计算，$\omega_1=3904{\rm rad/s}$，$\omega_2=6404{\rm rad/s}$ 。

    ​    

## 知识点2：滤波器

1、以下 *RC* 分压器可以作为 ________ 滤波器。

A．低通		B.高通		C. 带通		D. 全通

<img src="./resonator.assets/5-2-1.png" alt="5-2-1" style="zoom: 50%;" />



2、右图所示电路具有 ________ 特性。

<img src="./resonator.assets/5-2-2.png" alt="5-2-2" style="zoom:50%;" />

A. 高通		B. 低通		C. 带通		D. 带阻



3、为了避免 50 Hz 的电网电压干扰放大器，应选用 ________ 滤波器进行滤除。

A. 高通		B. 低通		C. 带通		D. 带阻



4、某学生设计了一个音频信号放大电路，发现在 50 Hz 频率附近有较大的干扰噪声，问可以采用什么类型的滤波器来抑制该噪声？________ 。

A. 低通滤波器		B. 高通滤波器		C. 带通滤波器		D. 带阻滤波器



5、下图电路的频率响应具有 ________ 。（电容器的电容无限大）

<img src="./resonator.assets/5-2-6-3140140.png" alt="5-2-6" style="zoom: 50%;" />

A. 低通特性		B. 高通特性		C. 带通特性		D. 带阻特性



6、下图为带通滤波器电路，已经 3dB 截止频率为 20.1 kHz 和 20.3 kHz，若 $R=30$ k$\Omega$, 求 $L$, $C$, $Q$

<img src="./resonator.assets/image-20221014192332342.png" alt="image-20221014192332342" style="zoom:50%;" />



**参考解答**

1. A
2. B
3. D
4. D
5. A
6. <img src="./resonator.assets/image-20221014192349995.png" alt="image-20221014192349995" style="zoom:40%;" />

