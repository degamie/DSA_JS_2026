//WID(16/8/2026)(Sarthak Mittal(DegamieSign))(find_common_elements_between_two_arrays)
//T(C(N)==O(N**2) and S(C(N))==O(N) as it require dynamic space alloc quarterly

//Output([5,6])
var findcommonelements=function (nums1,nums2) {
    const s1=new Set(nums1); const s2=new Set(nums2);
    let cnt1=0;let cnt2=0;
     for(const num of s2){
        if(s2.has(num)){cnt2++;}
    }    
    for(const num of s1){
        if(s1.has(num)){cnt1++;}
    }
    return [cnt1,cnt2];
}
let nums1=[1,3,5,7,9];let nums2=[2,1,6,9,5,11];

console.log(findcommonelements(nums1,nums2));
