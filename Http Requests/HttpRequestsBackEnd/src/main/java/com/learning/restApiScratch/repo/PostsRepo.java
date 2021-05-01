package com.learning.restApiScratch.repo;

import com.learning.restApiScratch.models.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostsRepo extends JpaRepository  <Posts, String>{

}
