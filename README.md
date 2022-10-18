# 팀 프로젝트 snplab-admin 수정

### 원본

- organization repository : https://github.com/Wanted-Pre-Onboarding-FE-Team5/snplab-admin

### 설치

```
git clone https://github.com/ymStudyLog/snplab-admin-ym.git

npm i

npm start 

//windows 운영체제에서 npm start 명령어로 json-server 실행이 안될 경우 추가로 아래 명령어 사용
npm run server 

```

### 각 페이지의 endpoint

- '/' : 랜딩 페이지
- '/admin' : 관리자 페이지

### 수정 과정

1. recoil 스토어에 존재하는 거주지역 데이터가 form 제출시 제출되지 않는 에러 

react-hook-form을 사용하여 폼 데이터를 제출하는 Form 컴포넌트와 거주지역 데이터를 선택하는 RegionModal 컴포넌트를 통해 원인을 파악하기 위해 노력했으나, 배열 데이터 타입을 react-hook-form에서 인식하지 못하는 것은 아닌가 하는 의문만 남긴채 정확한 원인은 파악하지 못했다. form 데이터 제출시 recoil 스토어의 거주지역 데이터를 직접 넣어주는 방식으로 에러는 해결했다.
 
- Admin 페이지 레이아웃 수정

### 향후 수정 계획

- react-hook-form 공식 문서를 연구해서 배열 데이터 타입을 인식하지 못하는 것이면 거주지역 데이터 형식을 변경한다.
- Admin 페이지에서 탭에서 데이터를 불러오는 query string 부분이 잘못되어 수정 예정.

:eyes: _Go back to github profile to check the other repositories_ :eyes:
[![github-profile](https://img.shields.io/badge/Github-Profile-blue?style=flat&logo=Git&logoColor=F05032)](https://github.com/ymStudyLog?tab=repositories)
