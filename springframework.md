# Spring Framework

## spring framework 란?

자바 플랫폼을 위한 오픈소스 애플리케이션 프레임워크로서 엔터프라이즈급 애플리케이션을 개발하기 위한 모든 기능을 종합적으로 제공하는 경량화된 솔루션

```
- 엔터프라이즈 환경?
대규모 데이터 처리와 트랜잭션이 동시에 여러 사용자로 부터 행해지는 매우 큰 규모의 환경
```

Spirng Framework는 경량 컨테이너로 자바 객체를 담고 직접 관리한다. 객체의 생성 및 소멸 그리고 라이프 사이클을관리하며 언제든 Spring 컨테이너로 부터 필요한 객체를 가져와 사용할 수 있다.
= Spirng은 IOC 기반의 Framework 이다.


## IOC 란?

Inversion of Control의 약자 = 제어의 역전

일반적으로 지금까지 프로그램은 객체 결정 및 생성 -> 의존성 객체 생성 -> 객채 내의 메소드 호출 하는 작업을 반복했다. 이는 각 객체들이 프로그램의 흐름을 결정하고 각 객체를 구성하는 작업에 직접적으로 참여함을 의미함. 즉 모든 작업을 사용자가 제어하는 구조

하지만 IOC에서의 객체는 자기가 사용할 객체를 선택하거나 생성하지 않는다. 자신의 모든 권한을 다른 대상에 위임함으로 써 제어권한을 위임받은 특별한 객체에 의해 결정되고 만들어진다.

### Spring IOC 컨테이너 사용하기 (ApplicationContext 이용하기)

```java
ApplicationContext context = new ClassPathXmlApplicationContext("spring/di/setting.xml");
ExamConsole console = (ExamConsole) context.getBean("console");
// getBean으로 꺼내올 때 캐스팅 해야함 object로 가져오기 때문.
ExamConsole console = context.getBean(ExamConsole.class); //선호되는 방법
console.print();
```

### IOC 의 구성요소 DI와 DL

IOC는 DI와 DL의 의해 구현된다.

#### DL(Dependency Lookup) - 의존성 검색

컨테이너에서는 객체들을 관리하기 위해 별도의 저장소에 빈을 저장하는데 이때 컨테이너에서 제공하는 api를 이용하여 사용하고자 하는 빈을 검색하는 방법을 말한다.

- setting.xml 에 bean태그 사용해서 지시하는 방법 (지시서 작성)

```xml
<!-- Exam exam = new NewlecExam();을 setting.xml 파일에서 아래와같이 작성하면 된다
패키지명도 같이 써줘야함 class에-->
<bean id ="exam" class="spring.di.entity.NewLecExam" />
<bean id="console" class="spring.di.ui.GridExamConsole">
<!-- console.setExam(exam); 아래와 같이 property 태그를 사용해 작성하면 된다.
setExam 에서 set을 생략하고 Exam 의 E를 소문자로 바꿔준다 -->
    <property name="exam" ref ="exam" />
</bean>
```

#### DI(Dependency Injection) - 의존성 주입

의존성 주입이란 객체가 서로 의존하는 관계가 되게 의존성을 주입하는 것이다. 객체지향 프로그램에서 의존성 이란 하나의 객체가 어떠한 다른 객체를 사용하고 있음을 의미한다. IOC에서의 DI는 각 클래스 사이에 필요로 하는 의존관계를 빈 설정 정보를 바탕으로 컨테이너가 자동으로 연결해 주는 것이다.

```java
//setter injection
B b = new B(); //dependency
A a = new A();

a.setB(b);// injection

//construction injection
B b = new B();
A a = new A(b);

```

- 값 형식 DI

```xml
<bean id="exam" class="spring.di.entity.NewLecExam">
    <property name="kor" value="10" />
</bean>
```

- 생성자 DI
property 대신 constructor-arg 를 사용하면 됨. index 속성으로 순서 지정 가능. 동일하게 name 사용 가능.

```xml
<bean id="exam" class="spring.di.entity.NewLecExam">
    <constructor-arg index="0" value="10" />
    <constructor-arg index="1" value="20" />
</bean>
```

<!-- namespaces 처리기에서 p 에 체크 실행하면 사용 가능
동일 문서에 bean 이 2개 이상 있을 수 있음. 각자 본인이 처리할 내용이 다를 수 있음 -->
```xml
<bean id="exam" class="spring.di.entity.NewLecExam" p:kor="10" p:eng="20" />
```

##### 콜렉션 생성과 목록 DI

```java
List<Exam> exams = new ArrayList<>();
exams.add(new NewLecExam(1,1,1,1));

for (Exam e : exams)
    System.out.println(e);
```

를 아래와 같이 변경.

```xml
<bean id="exams" class="java.util.ArrayList" />
    <constructor-arg>
        <list>
            <bean class="spring.di.entity.NewLecExam" p:kor="10" p:eng="20" />
            <ref bean="exam" />
        </list>
    </constructor-arg>
```

```xml
<util:list id="exams" list-class="java.util.ArrayList">
    <bean class="srping.di.entity.NewLecExam" p:kor="10" p:eng="20" />
    <ref bean="exam" />
</util:list>
```

```java
List<Exam> exams = (List<Exam>) context.getBean("exams");

for (Exam e : exams)
    System.out.println(e);
```


### 어노테이션

어노테이션을 이용해서 설정을 코드와 함께 가져가는 방법. 요즘에 많이 사용됨.

- @Autowired

```xml
<property name="exam" ref="exam" />
```
을 xml 파일에 작성할 필요없이 java 코드에 아래와같이 작성.

```java
@Autowired
private Exam exam;
```

required 속성의 사용 가능. settins 에 객체가 없어도 null 로 진행됨.


```java
@Autowired(reuqired=false)
@Qualifier("exam2")
private Exam exam;
```

단, setting.xml파일에 context namespaces 체크한뒤 `<context:annotation-config />` 추가해야함

- @Qualifier

Autowired가 무엇을 기준으로 injection 해주는지 명시

```xml
<bean id="exam1" class="srping.di.entity.NewLecExam" p:kor="10" p:eng="10" />
<bean id="exam2" class="srping.di.entity.NewLecExam" p:kor="20" p:eng="20" />
```

```java
@Autowired
@Qualifier("exam1")
@Override
public void setExam(Exam exam)
    this.exam = exam;
```

- @Component

어노테이션을 이용한 객체 생성 방법. setting.xml 파일에서  `<context:component-scan base-pakage="spring.di.ui"/>` 입력해주어야 사용가능.
`<context:annotation-config />`는 삭제해도 됨. 그리고 `@Component("console")` 이렇게 객체 생성 시 이름을 부여할 수 있다.

두개의 패키지를 스캔하도록 할 때에는 `<context:component-scan base-pakage="spring.di.ui, spring.di.entity" />`처럼 콤마 찍어서 입력.

- @Value

기본값 설정을 위한 어노테이션. 객체에 값을 설정하지 않아도 기본 값을 갖고 객체 생성.

```java
@Component
public class NewlecExam implements Exam {
    @Value("10")
    private int kor;
    @Vlaue("20")
    private int eng;
    private int math;
    private int com;
}
// kor = 10, eng = 20
```

- @Service, @Controller, @Repository 모두 @Component 와 동일하게 사용 가능하나, 객체화하는 클래스가 어떤 역할을 하는 클래스인지 명시 가능


## XML Configuration을 Java Configuration으로 변경

설정을 위한 java class임을 명시하기 위해 `@COnfiguration` 을 사용

```xml
<context:conponent-scan base-package="spring.di.ui" />
<bean id="exam" class="spring.di.entity.NewlecExam" />
```
을 아래와 같이 자바 클래스로 변환

```java
// NewlecAppConfig.java
@ComponentScan("spring.di.ui")
@Configuration
public class NewlecAppConfig{
    @Bean
    public Exam exam() { //여기서의 exam은 함수명이 아닌 contatiner에 담겨질 때의 이름으로 보는 것이 맞다. xml파일에서의 bean id
        return new NewlecExam();
    }

}
```

```java
// Program.java
// ApplicationContext context = new ClassPathXmlApplicationContext("spring/di/setting.xml")
ApplicationContext context = new AnnotationConfigApplicationContext(NewlecAppConfig.class);
```

- register 함수
여러개의 config.class를 설정하거나 분리해서 설정할 수 있음

```java
AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
ctx.register(NewlecAppConfig.class);
// ctx.register(AppConfig.class, OtherConfig.class) 이렇게 쉼표로 구분해서 여러개 사용 가능
ctx.refresh();
```


## Spring Framework의 특징

### POJO

POJO(Plain Old Java Object) 란 평범한 자바 오브젝트를 말한다. POJO는 gettet/setter를 가진 단순 자바 오브젝트로 정의를 하고 있다. 이러한 단순 오브젝트는 의존성이 없고 추후 테스트 및 유지보수가 편리한 유연성의 장점을 가진다.

### AOP

AOP(Aspect Oriented Programming)란 관점 지향 프로그래밍을 말한다. 대부분 소프트웨어 개발 프로세스에서 사용하는 방법은 OOP(Object Oriented Programming) 이다. OOP는 객체지향 원칙에 따라 관심사가 같은 데이터를 한곳에 모아 분리하고 낮은 결합도를 갖게하여 독립적이고 유연한 모듈로 캡슐화를 하는 것을 말한다. 하지만 중복된 코드들이 많아지고 가독성, 확장성, 유지보수성을 떨어 진다는 문제점이 있다. 이러한 문제를 보완하기 위해 나온 것이 AOP이다.

AOP에서는 핵심기능과 공통기능을 분리시켜 핵심 로직에 영향을 끼치지 않게 공통기능을 끼워 넣는 개발 형태 이다. 이렇게하면 무분별하게 중복되는 코드를 한 곳에 모아 중복 되는 코드를 제거 할 수 있어지고 공통기능을 한 곳에 보관함으로써 공통 기능 하나의 수정으로 모든 핵심기능들의 공통기능을 수정 할 수 있어 효율적인 유지보수가 가능하며 재활용성이 극대화할 수 있다.

- Cross-cutting Concern

로그처리, 보안처리, 트랜잭션 처리와 같은 core concern 이 아닌 업무를 cross-cutting concern이라 하고 이를 따로 모아 작성.
-> 스프링을 사용하면 AOP 쉽게 구현 가능

```
(java) proxy 클래스에 의해 구현되는 cross-cutting concern
ex) int total = proxy.total();
float avg = proxy.avg();
```


### MVC (Model2)

MVC란 (Model View Controller) 구조로 사용자 인터페이스와 비지니스 로직을 분리하여 개발 하는 것이다. MVC에서는 Model1과 Model2로 나누어져 있으며 일반적인 MVC는 Model2를 지칭한다.

#### Model

데이터처리를 담당하는 부분이다. Model부분은 Serivce영역과 DAO영역으로 나뉜다. Service 부분은 불필요하게 HTTP통신을 하지 않아야하고 request나 response와 같은 객체를 매개변수로 받아선 안된다. 또한 Model 부분의 Service는 view에 종속적인 코드가 없어야 하고 View 부분이 변경되더라도 Service 부분은 그대로 재사용 할 수 있어야 한다.

```
Model에서는 View와 Controller 어떠한 정보도 가지고 있어서는 안된다.
```

#### View

사용자 Interface를 담당하며 사용자에게 보여지는 부분이다. View는 Controller를 통해 모델에 데이터에 대한 시각화를 담당하며 View는 자신이 요청을 보낼 Controller의 정보만 알고 있어야 하는 것이 핵심이다. Model이 가지고 있는 정보를 저장해서는 안되며 Model, Controller에 구성 요소를 알아서는 안된다.

#### Controller

Controller에서는 View에 받은 요청을 가공하여 Model(Service 영역)에 이를 전달한다. 또한 Model로 부터 받은 결과를 View로 넘겨주는 역할을 합니다. Controller에서는 모든 요청 에러와 모델 에러를 처리하며 View와 Controller에 정보를 알고 있어야한다. Model과 View의 정보에 대해 알고 있어야한다.


## Spring Framework의 구조

### Spring core

Spring Container을 의미한다. 그중 핵심은 Bean Factory Container이다. Bean Factory는 IOC패턴을 적용하여 객체 구성 부터 의존성 처리까지 모든 일을 처리하는 역할을 하고 있기 때문이다.

### Spring context

context 정보들을 제공하는 설정 파일이다. Spring Context에는 JNDI, EJB, Validation, Scheduiling, Internaliztaion 등 엔터프라이즈 서비스들을 포함하고 있다.

### Spring AOP

Spring AOP module은 Spring Framework에서 관점지향 프로그래밍을 할 수 있고 AOP를 적용 할수 있게 도와주는 Module이다.

### Spring DAO

DAO란 Data Access Object의 약자로 Database Data에 접근하는 객체이다. Spring JDBC DAO는 추상 레이어를 지원함으로써 코딩이나 예외처리 하는 부분을 간편화 시켜 일관된 방법으로 코드를 짤 수 있게 도와준다.

### Spring ORM

ORM이란 Object relational mapping의 약자로 간단하게 객체와의 관계 설정을 하는 것이다. Spring에서는 Ibatis, Hibernate, JDO 등 인기있는 객체 관계형 도구(OR도구)를 사용 할 수 있도록 지원한다.

### Spring Web

Web context module은 Application module에 내장되어 있고 Web기반의 응용프로그램에 대한 Context를 제공하여 일반적인 Web Application 개발에 필요한 기본적인 기능을 지원한다.

### Spring MVC

JSP, Velocity, Tiles, iText 및 POI를 포함한 수많은 뷰 기술을 지원한다.
