# 频率响应

::: tip

频率响应与复频域分析、传递函数与波特图、放大器的频率响应（截止频率、通频带、增益带宽积、增益函数）、低频特性与高频特性的分析（即 $\omega_L$ 和 $\omega_H$ 的计算）、密勒定理。

:::

# 习题及参考解答

## 知识点1：传输函数与波特图

1、一个放大电路的对数幅频特性如下图所示。当信号频率恰好为上限频率或下限频率时，实际的电压增益为 ________ 。

<img src="./freq.assets/11-1-1.png" alt="11-1-1" style="zoom: 80%;" />

A. 43dB		B. 40dB		C. 37dB		D. 3dB



2、某放大电路电压放大倍数高频段的频率特性表达式为 ${\dot A_v} = \frac{{ - 100}}{{\left( {1 + jf/100{\rm{ kHz}}} \right)\left( {1 + jf/1{\rm{ MHz}}} \right)}}$ ，画出其波特图，求其上限截止频率 $f_H$ 的近似值。



3、某放大电路的传输函数为 $T(s)=\frac{10^5}{(1+\frac{s}{10^2})(1+\frac{s}{10^3})(1+\frac{s}{10^5})}$，其相位波特图中最大相移为 ________ 。

A. 0°		B. −90°		C. −180°		D. −270°



4、已知某反相放大电路电压放大倍数的对数幅频特性曲线如下图所示，则该放大电路电压放大倍数的频率特性表达式为 ________ 。

<img src="./freq.assets/11-1-4.png" alt="11-1-4" style="zoom: 80%;" />



5、一阶无源低通滤波器的传递函数在截止频率处的相位等于 ________ ；一阶无源高通滤波器的传递函数在截止频率处的相位等于 ________ 。



6、已知某基本共射放大电路的波特图如下图所示，则 $A_v$ 的表达式为 ________ 。

<img src="./freq.assets/11-1-6.png" alt="11-1-6" style="zoom: 20%;" />



7、已知某放大电路的增益为 ${\dot A_v} = \frac{{ \pm 100jf}}{{\left( {1 + j\frac{f}{{10}}} \right)\left( {1 + j\frac{f}{{{{10}^4}}}} \right)\left( {1 + j\frac{f}{{{{10}^5}}}} \right)}}$ ，则电路的下限频率 ${f_L} \approx$  ________ Hz，下限频率 ${f_H} \approx$  ________ kHz。



8、某放大电路的频率响应如下图所示，该电路的增益频率响应 $A_v$ 的表达式为 ________ 。

<img src="./freq.assets/11-1-8.png" alt="11-1-8" style="zoom: 80%;" />



9、某放大器的传递函数 $T(jf)=\frac{-10^4}{(1+\frac{jf}{10^3})(1+\frac{jf}{10^5})(1+\frac{jf}{10^6})}$ ，分别画出其幅度和相位波特图（用折线近似法，并注意标明关键位置的坐标和折线斜率）。



**参考解答**

1. C

2. 解：

   波特图为：

   <img src="./freq.assets/image-20221006192200942.png" alt="image-20221006192200942" style="zoom:70%;" />

   由图可知，上限截止频率 $f_H$ ≈ 100 kHz。

   

3. D

4. 由波特图可知：

   $f_{p1}= 10^5{\rm Hz}$，$f_{p2}= 10^7{\rm Hz}$，$f_{p3}= 10^8{\rm Hz}$ 

   $20\lg{A_0}=80 \Rightarrow A_0=10^4$ 

   又因为该放大电路为反相放大电路

   因此， ${\dot A_v} = - \frac{{{{10}^4}}}{{(1 + jf/{{10}^5}{\rm{Hz}})(1 + jf/{{10}^7}{\rm{Hz}})(1 + jf/{{10}^8}{\rm{Hz}})}}$ 

5. -45°      45°

6. ${\dot A_v} \approx \frac{{ - 32}}{{\left( {1 + \frac{{10}}{{{\rm{j}}f}}} \right)\left( {1 + {\rm{j}}\frac{f}{{{{10}^5}}}} \right)}}$ 或 ${\dot A_v} \approx \frac{{ - 3.2j{\rm{ }}f}}{{\left( {1 + j\frac{f}{{10}}} \right)\left( {1 + j\frac{f}{{{{10}^5}}}} \right)}}$ 

7. 10      10

8. $\frac{{100s}}{{\left( {1 + \frac{s}{{10}}} \right)\left( {1 + \frac{s}{{{{10}^4}}}} \right)\left( {1 + \frac{s}{{{{10}^5}}}} \right)}}$   或   $\frac{{1000}}{{\left( {1 + \frac{{10}}{s}} \right)\left( {1 + \frac{s}{{{{10}^4}}}} \right)\left( {1 + \frac{s}{{{{10}^5}}}} \right)}}$       （ $A_v$ 可正可负）

9. 解：

   <img src="./freq.assets/11-2-9.png" alt="11-2-9" style="zoom: 67%;" />



## 知识点2：放大器的频率响应

1、如下图所示共射放大电路，其中 $R_s$ = 1 kΩ，$r_{bb'}$( or $r_x$ ) = 0.2 kΩ，*β* = 100，$C_\mu$ = 0.5 pF, $C_\pi$ =14.8 pF，$R_L$ = 5 kΩ，静态集电极电流 $I_{CQ}$ = 1 mA，取 $V_T=26{\rm{mV}}$ ，利用米勒定理，画出米勒等效后的小信号等效电路，并求该电路的上限截止频率 $f_H$。

<img src="./freq.assets/11-2-1.png" alt="11-2-1" style="zoom:50%;" />



2、放大电路在高频信号作用时放大倍数数值下降的主要原因是 ________ ，而低频信号作用时放大倍数数值下降的原因是 ________ 。

A. 耦合电容和旁路电容的存在		B. 晶体管极间电容和分布电容的存在

C. 晶体管的非线性特性           		D. 放大电路的静态工作点不合适



3、如下图所示电路，已知 $\beta  = 100$，${V_{BE}} = 0.7{\rm{ V}}$。

(1)  见 第10章-知识点4-题2；

(2)  见 第10章-知识点4-题2；

(3)  求 ${C_1}$，${C_2}$，${C_E}$ 和 ${C_3}$ 对应的低频截止频率。

<img src="./freq.assets/11-2-3.png" alt="11-2-3" style="zoom:50%;" />



4、如下图所示电路，已知 $C_{gs}=C_{gd}=5{\rm pF}$，$g_m=5{\rm mS}$，$C_1=C_2=C_S=10{\rm {\mu F}}$，求中频电压增益 $A_m=v_o/v_s$、高频截止频率 $f_H$ 和低频截止频率 $f_L$ 。

<img src="./freq.assets/11-2-4.png" alt="11-2-4" style="zoom: 67%;" />



5、影响放大电路高频特性的主要因素是 ________ 。

A. 耦合电容和旁路电容的存在			B. 放大电路的静态工作点不合适

C. 半导体管的非线性特性					D. 半导体管极间电容和分布电容的存在



6、放大器的小信号通路中，某一结点有一到地的等效电容 *C* 和一到地的等效电阻 *R* ，则该 *RC* 对放大器频率响应的影响为 ________ 。

A. 引入一个低频零点			B. 引入一个低频极点

C. 引入一个高频零点			D. 引入一个高频极点



7、有一 IC 内部的共源 NMOS 放大器，其高频小信号等效电路如下图所示，小信号参数为：$g_m=1.25{\rm mA/V}$，$C_{gs}=20{\rm fF}$，$C_{gd}=5{\rm fF}$；负载 $C_L=25{\rm fF}$，$R'_L=10{\rm k \Omega}$，信号源等效内阻 $R'_{sig}=10{\rm k \Omega}$，用开路时间常数法计算该电路的上限截止频率。

<img src="./freq.assets/11-2-7.png" alt="11-2-7" style="zoom:60%;" />



8、三极管或 MOS 管的寄生电容导致放大电路的 ________ （高频/低频）增益衰减，隔直电容和旁路电容导致放大电路的 ________ （高频/低频）增益衰减。



9、共发射极放大电路如下图所示。已知晶体管的 $\beta=100$ ，$V_T=25{\rm mV}$。

(1) 求电路的发射极静态电流 $I_E$ 、三极管集电极和发射极之间的静态电压 $V_{CE}$ 。

(2) 假定耦合电容和旁路电容的电容值很大，求电路的中频电压放大倍数、输入电阻和输出电阻。

(3) 若 $C_e=10{\rm \mu F}$ ，考虑电路的低频响应，求由电容 $C_e$ 所确定的低频极点的频率。

<img src="./freq.assets/11-2-9-Ture.png" alt="11-2-9-Ture" style="zoom:50%;" />



10、如下图所示的共发射极电路，已知 $V_{CC}=9{\rm V}$，$R_1=27{\rm k \Omega}$，$R_2=15{\rm k \Omega}$，$R_E=1.2{\rm k \Omega}$，$R_C=2.2{\rm k \Omega}$。晶体管的 $\beta=100$，$V_{BE}=0.7{\rm V}$，$V_T=25{\rm mV}$。信号源内阻 $R_s=10{\rm k \Omega}$，负载阻值 $R_L=2{\rm k \Omega}$，晶体管的 $r_{bb'}=0{\rm \Omega}$ （即 $r_x=0{\rm \Omega}$ ）

(1)	计算直流偏置电流 $I_E$ ；

(2)	假定耦合电容 $C_1$ 、$C_2$  和 $C_E$ 的电容值均为无穷大。计算微变等效电路的 $r_{be}$ （即 $r_{\pi}$ ），将晶体管用其低频小信号等效电路替代，画出该电路的交流等效电路，求输入电阻 $R_i$ 、输出电阻 $R_o$ 和电压增益 $v_o/v_s$ 。

(3)	若 $C_E=10{\rm \mu F}$ ，考虑到电路的低频效应，求由电容 $C_E$ 确定的低频极点的频率。

<img src="./freq.assets/image-20221006192720929.png" alt="image-20221006192720929" style="zoom:50%;" />





**参考解答**

1. 解：

   (1) 画出高频微变等效电路求模型参数。

   ![image-20221006192801544](./freq.assets/image-20221006192801544.png)

   由 $I_{CQ}$ 可以计算出跨导 $g_m$ :

   ${g_m} = \frac{{{I_{CQ}}}}{{{U_T}}} = \frac{{1mA}}{{26mV}} = \frac{1}{{26\Omega }}$ 

   ${r_{b'e}} = \frac{\beta }{{{g_m}}} = 100 \times 26 = 2600\Omega$ 

   $C_\pi ^{'} = {C_\pi } + (1 + {g_m}{R_L}){C_\mu } = 111.5{\rm{pF}}$ 

   (2) 求上限频率 $\omega_{H1}$。

   ${\omega _{H1}} = \frac{1}{{RC'_\pi}} = \frac{1}{{[({R_s} + {r_{bb'}})//{r_{b'e}}]C'_\pi}} = 10.94 \times {10^6}{\rm{rad/s}}$ 

   ${f_H} = \frac{{{\omega _H}}}{{2\pi }} = \frac{{10.94 \times {{10}^6}}}{{2\pi }} = 1.74{\rm{MHz}}$ 

   

2. B      A

3. 解：

   (3)  ${f_{LC1}} = \frac{1}{{2\pi \left( {{R_{B1}}//{R_{B2}}//{r_{\pi 1}}} \right){C_1}}} = \frac{1}{{2\pi \left( {56//27//5.43} \right) \times 10 \times {{10}^{ - 3}}}} \approx 3.80{\rm{ Hz}}$ 

   ​	  ${f_{LC2}} = \frac{1}{{2\pi \left( {{R_{C1}} + {R_{i2}}} \right){C_2}}} = \frac{1}{{2\pi \left( {2 + 2.89} \right) \times 10 \times {{10}^{ - 3}}}} \approx 3.25{\rm{ Hz}}$ 

   ​	  ${f_{L{C_E}}} = \frac{1}{{2\pi \left( {{R_{E1}}//\frac{{{r_{\pi 1}}}}{{\beta  + 1}}} \right){C_E}}} = \frac{1}{{2\pi \left( {2//\frac{{5.43}}{{100 + 1}}} \right) \times 0.1}} \approx 30.40{\rm{ Hz}}$ 

   ​	  由于 $C_L$ 极小，在低频段用开路等效。

   ​	  ${f_{Lc3}} = \frac{1}{{2\pi \left( {{R_{C2}} + {R_L}} \right){C_3}}} = \frac{1}{{2\pi \left( {3 + 3} \right) \times 10 \times {{10}^{ - 3}}}} \approx 2.65{\rm{ Hz}}$ 

   

4. 解：

   ​	 $f_H$、$f_L$ 的表达式分析如下：

   ​	 ${A_{\rm{m}}} = \frac{{{R_g}}}{{{R_{\rm{s}}} + {R_g}}}( - {g_{\rm{m}}}{R_d}{\rm{//}}{R_L}) \approx  - {g_{\rm{m}}}{R_d}{\rm{//}}{R_L} \approx  - 12.4$ 

   ​	 $R_s \rm{//} \frac{1}{g_m} \ll R_s+R_{ss}$ ， $R_s \rm{//} \frac{1}{g_m} \ll R_d+R_L$ 

   ​	 ${f_{\rm{L}}} \approx \frac{1}{{2{\rm{\pi }}\left( {{R_{\rm{s}}}{\rm{//}}\frac{1}{{{g_m}}}} \right){C_{\rm{s}}}}} \approx 95.5{\rm{ Hz}}$ 

   ​	 ${{C'}_{gs}} = {C_{{\rm{gs}}}} + (1 + {g_{\rm{m}}}{R_d}{\rm{//}}{R_L}){C_{{\rm{gd}}}} \approx 72{\rm{pF}}$ 

   ​	 ${f_{\rm{H}}} = \frac{1}{{2\pi ({R_{\rm{s}}}{\rm{//}}{R_{\rm{g}}})C_{{\rm{gs}}}^{\rm{'}}}} \approx \frac{1}{{2{\rm{\pi }}{R_{\rm{s}}}C_{{\rm{gs}}}^{\rm{'}}}} \approx 1.1{\rm{MHz}}$ 

   ​	 

   ​	 (关于 $f_L$ 和 $f_H$ 的详细计算过程如下)

   <img src="./freq.assets/image-20221006192910784.png" alt="image-20221006192910784" style="zoom:50%;" />

   ​	 低频时：

   ​	 $C_1$ 作用，其他短路

   ​	 ${R_i} = {R_g} = 1M\Omega$ 

   ​	 ${\omega _{L1}} = \frac{1}{{(R + {R_i}){C_1}}} = \frac{1}{{(2 + 1000) \times {{10}^3} \times 10 \times {{10}^{ - 6}}}} = 0.1{\rm rad/s}$ 

   ​	  $C_2$ 作用，其他短路

   ​	 ${\omega _{L2}} = \frac{1}{{({R_D} + {R_L}){C_2}}} = \frac{1}{{(10 + 3.3) \times {{10}^3} \times 10 \times {{10}^{ - 6}}}} = 7.5{\rm rad/s}$ 

   ​	 $C_S$ 作用，其他短路

   ​	 ${\omega _{LS}} = \frac{1}{{({R_S}//\frac{1}{{{g_m}}}){C_S}}} = \frac{1}{{\frac{1}{6} \times {{10}^3} \times 10 \times {{10}^{ - 6}}}} = 600{\rm rad/s}$ 

   ​	 因此下限截止频率近似为

   ​	 ${\omega _L} = {\omega _S} = 600{\rm rad/s}$ 

   ​	 ${f_L} = \frac{{{\omega _L}}}{{2\pi }} = 95.5{\rm Hz}$ 

   ​	 

   ​	 高频时：

   ​	 ${C_T} = {C_{gs}} + (1 + {g_m}{R_L}'){C_{ds}} = 72{\rm pF}$ 

   ​	 ${R_s}' = R//{R_g} \approx R$ 

   ​	 ${\omega _H} = \frac{1}{{{R_s}'{C_T}}} = \frac{1}{{2*72}} = 6.95 \times {10^6}{\rm rad/s}$ 

   ​	 ${f_H} = \frac{{{\omega _H}}}{{2\pi }} = 1.1{\rm MHz}$ 

   

5. D

6. D

7. 解：

   方法一：

   ​		$R_{gs}=R'_{sig}=10{\rm k \Omega}$ 

   ​		$R_{gd}=R'_{sig}(1+g_mR'_L)+R'_L=10(1+1.25\times10)+10=145{\rm k \Omega}$ 

   ​		$R_{C_L}=R'_L=10{\rm k \Omega}$ 

   ​		$\tau_{gs}=C_{gs}R_{gs}=20 \times 10^{-15} \times 10 \times 10^3=200{\rm ps}$ 

   ​		$\tau_{gd}=C_{gd}R_{gd}=5 \times 10^{-15} \times 145 \times 10^3=725{\rm ps}$ 

   ​		$\tau_{C_L}=C_{L}R_{C_L}=25 \times 10^{-15} \times 10 \times 10^3=250{\rm ps}$ 

   ​		$\tau_H=\tau_{gs}+\tau_{gd}+\tau_{C_L}=200+725+250=1175{\rm ps}$ 

   ​		$f_H=\frac{1}{2\pi\tau_H}=\frac{1}{2\pi\times1175\times10^{-12}}=135.5{\rm MHz}$ 

   方法二：

   ​		先 Miller 等效，再计算

   ​		$C_{in}=C_{gs}+(1+g_mR'_L) \times C_{gd}=87.5{\rm fF}$ 

   ​		$R'_{sig} \times C_{in}=875{\rm ps}$ 

   ​		$C_{out}=C_{gd}||C_L=30{\rm fF}$ 

   ​		$R'_L \times C_{out}=300{\rm ps}$ 

   ​		$\sum_i R_iC_i=1175{\rm ps}$ 

   ​		$f_H=\frac{1}{2\pi\tau_H}=\frac{1}{2\pi\times1175\times10^{-12}}=135.5{\rm MHz}$ 

   

8. 高频      低频

9. 解：

   (1)  ${V_{BB}} = \frac{{{R_{b1}}}}{{{R_{b1}} + {R_{b2}}}}{V_{CC}} = 2{\rm{V}}$ 

   ​	  ${R_{bb}} = {R_{b1}}//{R_{b2}} \approx 4.17{\rm{k\Omega }}$ 

   ​	  ${I_B} = \frac{{{V_{bb}} - 0.7}}{{\left( {\beta  + 1} \right)\left( {{R_f} + {R_e}} \right)}} \approx 9.90{\rm{ \mu A}}$ 

   ​	  ${I_C} = {\rm{990 \mu A}}$ 

   ​	  ${I_E} = {\rm{999}}{\rm{.9 \mu A}} \approx {\rm{1 mA}}$ 

   ​	  ${V_{CE}} = {V_{CC}} - {I_C}{R_c} - {I_E}\left( {{R_e} + {R_f}} \right) = 5.7{\rm{5 V}}$ 

   (2)  ${r_\pi } = \left( {1 + \beta } \right)\frac{{{V_T}}}{{{I_E}}} = 101 \times \frac{{25}}{1} = 2.525{\rm{ k\Omega }}$ 

   ​	  ${A_v} =  - \frac{{\beta \left( {{R_c}//{R_L}} \right)}}{{{r_\pi } + \left( {\beta  + 1} \right){R_f}}} =  - \frac{{100 \times 2.5}}{{2.525 + 101 \times 0.3}} \approx  - 7.62$ 

   ​	  ${R_i} = {R_{b1}}//{R_{b2}}//\left[ {{r_\pi } + \left( {\beta  + 1} \right){R_f}} \right] \approx 3.7{\rm{0 k\Omega }}$ 

   ​	  ${R_o} = {\rm{5 k\Omega }}$ 

   (3)  从 $C_e$ 看进去的电阻：

   ​	  ${R_{{C_e}}} = {R_e}//\left( {{R_f} + \frac{{r_\pi }}{{\beta  + 1}}} \right) = 1.0//\left( {0.3 + \frac{2.525}{{100 + 1}}} \right) \approx 0.2453{\rm{k\Omega }}$ 

   ​	  由 $C_e$ 确定的低频极点的频率：

   ​	  ${f_{{C_e}}} = \frac{1}{{2\pi {C_e}{R_{{C_E}}}}} = \frac{1}{{2\pi  \times 10 \times {{10}^{ - 6}} \times 245.3}} \approx 64.88{\rm{Hz}}$ 

   

10. 解：

   直流分析：

   ​	  ${V_{BB}} = \frac{{{R_2}}}{{{R_1} + {R_2}}}{V_{CC}} = \frac{{15}}{{15 + 27}} \times 9 = 3.21V$ 

   ​	  ${R_{BB}} = \frac{{{R_1}{R_2}}}{{{R_1} + {R_2}}} = 9.64{\rm k \Omega}$ 

   ​	  ${I_B} = \frac{{{V_{BB}} - 0.7}}{{{R_{BB}} + \left( {1 + \beta } \right){R_E}}} = \frac{{3.21 - 0.7}}{{9.64 + 101 \times 1.2}} = 0.0192mA$ 

   ​	  ${I_C} = \beta {I_B} = 1.92mA$ 

   ​	  ${I_E} \approx 1.94{\rm{ mA}}$ 

   ​	  ${V_C} = {V_{CC}} - {I_C}{R_C} = 9 - 1.92 \times 2.2 = 4.78V$ 

   交流分析

   <img src="./freq.assets/image-20221006193011635.png" alt="image-20221006193011635" style="zoom:50%;" />

   ​	  ${r_{be}} = {r_{bb'}} + \frac{{{V_T}}}{{{I_B}}} = 0 + \frac{{25}}{{0.0192}} \times \frac{1}{{1000}} \approx {\rm{1}}{\rm{.30 k\Omega }}$ 

   ​	  ${R_i} = {R_1}//{R_2}//{r_{be}} \approx {\rm{1}}{\rm{.15 k\Omega }}$ 

   ​	  ${R_o} = {R_C} = 2.2{\rm{ k}}\Omega$ 

   ​	  ${A_v} = \frac{{{v_o}}}{{{v_i}}} =  - \frac{{\beta \left( {{R_C}//{R_L}} \right)}}{{{r_{be}}}} =  - \frac{{100 \times 1.05}}{{1.30}} \approx  - 80.{\rm{77 V/V}}$ 

   ​	  ${A_{vs}} = {A_v}\frac{{{R_i}}}{{{R_i} + {R_s}}} =  - 8.{\rm{33 V/V}}$ 

   从 $C_E$ 看进去的电阻：

   ​	  ${R_{{C_E}}} = {R_E}{\rm{//}}\frac{{{r_{be}} + {R_1}{\rm{//}}{R_2}{\rm{//}}{R_s}}}{{\beta  + 1}} = \left( {1.2{\rm{//}}\frac{{1.30 + 27{\rm{//15//10}}}}{{100 + 1}}} \right) \times 1000 \approx 58.48{\rm{ }}\Omega$ 

   由 $C_E$ 确定的低频极点的频率

   ​	  ${f_{{C_E}}} = \frac{1}{{2\pi {C_E}{R_{{C_E}}}}} = \frac{1}{{2\pi  \times 10 \times {{10}^{ - 6}} \times 58.48}} \approx {\rm{272}}{\rm{.3 Hz}}$ 



## 知识点3：其他

1、根据 miller 定理，下图电路中跨接电容等效到输入端和输出端的电容分别为 ________ 和 ________ 。

<img src="./freq.assets/11-3-1.png" alt="11-3-1" style="zoom:50%;" />



2、当信号频率等于放大电路上限截止频率时，电路增益约下降为中频增益的约 ________ 倍。



**参考解答**

1.  $C_F(1+A_0)$ 		$C_F(1+1/A_0)$ 
2.  0.707





