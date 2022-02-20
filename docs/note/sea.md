
## 海洋科学理论

### 1. 波浪基础理论

#### 1.1 波浪的分类与介绍

按相对水深(水深与波长之比，即$\lambda$)，可将波浪分为深水波(短波)和浅水波(长波)；按波形的传播与否又分为前进波和驻波之分；按波动发生的位置又有表面波、内波和边缘波之分；按成因分又有风浪、涌浪、地震波之分。

当海浪波长大于1.73cm以上时，表面张力的贡献可以忽略，此时被称为**重力波**，当海浪波长小于1.73cm时，表面张力的贡献不可忽略，此时被称为**毛细波**。

##### (小振幅)重力波

亦称正弦波，是一种简单运动。取右手直角坐标系，$z$轴向上为正，将$x-y$平面放在海面上，设波动是二维的，只在$x$方向上传播，则波剖面方程可用下列正弦曲线表示，即：
$$
\zeta=\alpha \sin (k x-\sigma t)
$$
其中，$a$为波动的振幅，$\zeta$为波面相对平均水面的铅直位移。显然它是地点$x$与时间$t$的函数，式中：
$$
k=\frac{2 \pi}{\lambda}, \quad \sigma=\frac{2 \pi}{T}
$$
分别称为波数和频率。
当水深为$h$时，存在以下色散关系(频散关系)：
$$
\sigma^{2}=k g \tan \mathrm{h}(k h)=k g \tan \mathrm{h}(2 \pi h / \lambda)
$$
当水体深度大于波长的一半，水深的影响基本可以忽略：
$$
\sigma^{2}=k g + T k^{3}
$$
其中，$T=7.4*10^{-5}$为水表面张力与密度之比。

**波浪的相速度/群速度/轨道速度：**

![](/images/wave/wave_group.gif)

此图示为深水表面的波的传递模式。红点以相速度运动，绿点以群速度运动。在这个例子中，红点从左向右运动的过程中两次跨过绿点，相速约略为群速的两倍。新的波看起来像是从一个波群的末尾处开始生成，振幅逐渐增大直至到达波群中间，然后再消失于波的前端。对于水表面的波，大多数情况下群速度远小于相速度。

当上式中的$(kx-\sigma t)=\pi/2$时， $\zeta=a$，即为波峰。
此时的**相速度**为：$c_{p}=\frac{\lambda}{T}$ 或 $c_{p}=\frac{\sigma}k=\hat{\mathbf{k}} \frac{\sigma}{|\mathbf{k}|}$

对于水深值很大的重力波：$c_{p}=\sqrt{\frac{g}k}=\hat{\mathbf{k}} \sqrt{\frac{g}{|\mathbf{k}|}}$

对于毛细波：$c_{p}=\sqrt{\frac{g}k+Tk}=\hat{\mathbf{k}} \sqrt{\frac{g}{|\mathbf{k}|}+T|\mathbf{k}|}$

海面散射主要是Bragg波的反射，而Bragg波是以相速度运动的，因此雷达对海面观测可以理解为对以一定相速度运动的Bragg散射体进行观测，这会导致多普勒频偏效应。

波浪的**群速度**为：$c_{g}=\frac{\partial \sigma}{\partial k}=\hat{\mathbf{k}} \frac{\partial \sigma}{\partial|\mathbf{k}|}$

对于重力波：$c_{g}=\frac{1}{2} \sqrt{\frac{g}{k}}=\frac{\hat{\mathbf{k}}}{2} \sqrt{\frac{g}{|\mathbf{k}|}}=\frac{1}{2} c_{p}$

对于毛细波：$c_{g}=\frac{g+Tk^{2}} {2\sqrt{gk+Tk^3}}=\hat{\mathbf{k}} \frac{g+T|\mathbf{k}|^{2}}{2 \sqrt{g|\mathbf{k}|+T|\mathbf{k}|^{3}}}$

重力波群速度是相速度的一半，导致了舰船开尔文尾迹张角是$2 \times \sin ^{-1}\left(\frac{1}{3}\right)$，约为$39^{\circ}$

#### 1.2 波浪的色散关系

### 2. 海面微波遥感

对于镜面反射，通常只有对 $0^{\circ}$~$15^{\circ}$的入射角才是最重要的，对于大于$15^{\circ}$的入射角而言，主要通过海面的后向散射得到回波信号，且回波信号的强弱很大程度上取决于海面的粗糙度。

#### 2.1 雷达海面后向散射截面

#### 2.2 海面粗糙度

#### 2.3 Bragg共振散射原理

NRCS一般包括两个部分：一部分由电磁波在海面的镜面反射机制产生；另一部分是由Bragg共振散射机制产生的信号，即：(未完)

附：**《Measurements of Ocean Surface Waves and Currents Using L- and C-Band Along-Track Interferometric SAR》**

![](/images/ati-sar/ati-sar.png)

**一些结论：**

![](/images/ati-sar/line-of-sight-velocity.png)

- 可以通过两张复图像的结合来提取相位差异，相位差与后向散射信号的多普勒频移$\omega_{D}$成比例，对于散射体的视线速度(line-of-sight velocity $U_{r}$)，相位差为：
  $$
  \Delta \phi=\omega_{D} \Delta t=\frac{k_{i} B}{V} \cdot U_{r}=\frac{2 \pi B}{\lambda_{i} V} \cdot U_{r}
  $$
  其中$V$为平台速度，$k_{i}$和$\lambda_{i}$分别是雷达波的波矢量和波长。

- 由于Bragg散射机制仅会选取径向传播的波(包括advancing和receding的)，仅由Bragg共振波引起的被雷达观测到的净多普勒速度位于$\pm c_{p}$之间，且迎风时的最大相速度取决于它们的方向分布。

- 当直接处于上风向或下风向时，这种情况比较简单，但当斜对风或侧风时情况略微复杂，因为前进和后退的Bragg共振波都可以贡献净布拉格波相速度。

- 表面流场无法通过顺轨干涉SAR准确估计的原因是多普勒频移与平均表面流(mean surface current)的成分不是简单的比例关系，还有其他因素的贡献，比如：Bragg波的相速度以及所有海洋波的轨道运动。

- Bragg波相速度分量，是提取表面流场信息时的主要误差来源。

- 从SAR回波数据中反演波高与表面流场有一定难度，是因为SAR成像过程中需要考虑几种调制作用，包括倾斜调制、水动力学调制、速度拘束效应以及方位向模糊，这些都是由于轨道加速和轨道速度的作用。

- 文中引用的文献多数都没考虑到由长波的轨道运动所引起的其他RCS变量，因此认为上述方法只适合于近海区域。

- Bragg波在沿着雷达方向的两个分量，这两个分量调制强度的不同也会影响提取流场信息的准确度。

- Bragg波的方向传播分布通常可以被建模为：
  $$
  G\left(\theta_{w}\right)=\cos ^{2 n}\left(\frac{\theta_{w}}{2}\right)
  $$
  其中$\theta_{w}$是相对于雷达视向的风向，$n$是扩散系数，通常取谱中间范围2-5的位置。

- 由于布拉格散射理论规定，雷达对满足Bragg共振条件的径向行波在给定的观测方向上是比较敏感的，因此我们使用接近波和后退波的相对光谱密度来确定净布拉格波相速度$v_{b}$
  $$
  \begin{aligned}
  v_{b}\left(\theta_{w}\right) &=\alpha\left(\theta_{w}\right) c_{p}-\left[1-\alpha\left(\theta_{w}\right)\right] c_{p}=\left[2 \alpha\left(\theta_{w}\right)-1\right] \cdot c_{p} \\
  &=\left[\frac{G\left(\theta_{w}\right)-G\left(\theta_{w}+\pi\right)}{G\left(\theta_{w}\right)+G\left(\theta_{w}+\pi\right)}\right] \cdot c_{p}
  \end{aligned}
  $$
  其中$\alpha$和$1-\alpha$分别表示接近和后退的Bragg共振波谱密度对于雷达回波的贡献占比。

- Bragg共振重力波的相速度可以由下式得到：
  $$
  c_{p}=\sqrt{\frac{g}{2 \pi} \cdot \frac{\lambda_{i}}{2 \sin \theta}}
  $$
  其中$g$为重力加速度，$\lambda_{i}$为雷达入射波的波长，$\theta$为雷达波束入射角。

