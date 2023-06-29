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


### IOC 의 구성요소 DI와 DL

IOC는 DI와 DL의 의해 구현된다.

#### DL(Dependency Lookup) - 의존성 검색

컨테이너에서는 객체들을 관리하기 위해 별도의 저장소에 빈을 저장하는데 이때 컨테이너에서 제공하는 api를 이용하여 사용하고자 하는 빈을 검색하는 방법을 말한다.

#### DI(Dependency Injection) - 의존성 주입

의존성 주입이란 객체가 서로 의존하는 관계가 되게 의존성을 주입하는 것이다. 객체지향 프로그램에서 의존성 이란 하나의 객체가 어떠한 다른 객체를 사용하고 있음을 의미한다. IOC에서의 DI는 각 클래스 사이에 필요로 하는 의존관계를 빈 설정 정보를 바탕으로 컨테이너가 자동으로 연결해 주는 것이다.

```java
//seter injection
B b = new B(); //dependency
A a = new A();

a.setB(b);// injection

//construction injection
B b = new B();
A a = new A(b);

```


## Spring Framework의 특징

### POJO

POJO(Plain Old Java Object) 란 평범한 자바 오브젝트를 말한다. POJO는 gettet/setter를 가진 단순 자바 오브젝트로 정의를 하고 있다. 이러한 단순 오브젝트는 의존성이 없고 추후 테스트 및 유지보수가 편리한 유연성의 장점을 가진다.

### AOP

AOP(Aspect Oriented Programming)란 관점 지향 프로그래밍을 말한다. 대부분 소프트웨어 개발 프로세스에서 사용하는 방법은 OOP(Object Oriented Programming) 이다. OOP는 객체지향 원칙에 따라 관심사가 같은 데이터를 한곳에 모아 분리하고 낮은 결합도를 갖게하여 독립적이고 유연한 모듈로 캡슐화를 하는 것을 말한다. 하지만 중복된 코드들이 많아지고 가독성, 확장성, 유지보수성을 떨어 진다는 문제점이 있다. 이러한 문제를 보완하기 위해 나온 것이 AOP이다.

AOP에서는 핵심기능과 공통기능을 분리시켜 핵심 로직에 영향을 끼치지 않게 공통기능을 끼워 넣는 개발 형태 이다. 이렇게하면 무분별하게 중복되는 코드를 한 곳에 모아 중복 되는 코드를 제거 할 수 있어지고 공통기능을 한 곳에 보관함으로써 공통 기능 하나의 수정으로 모든 핵심기능들의 공통기능을 수정 할 수 있어 효율적인 유지보수가 가능하며 재활용성이 극대화할 수 있다.

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
